import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: pass => {
        return pass && pass.length >= 5;
      },
      message: 'Password must be at least 5 characters long',
    },
  },
}, { timestamps: true });

export const User = models?.User || model('User', UserSchema);
