import mongoose from "mongoose";
import { User } from "../../models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        await mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });

        if (user) {
          // Compare the input password with the stored plain text password
          if (password === user.password) {
            console.log('Successfully logged in');
            return user;
          } else {
            console.log('Password incorrect. Login unsuccessful');
            return null;
          }
        } else {
          console.log('User not found');
          return null;
        }
      }
    })
  ],
});

export { handler as GET, handler as POST };
