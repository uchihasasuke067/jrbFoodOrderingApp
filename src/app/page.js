import Image from 'next/image'
import Hero from '../components/layout/Hero'
import HomeMenu from '../components/layout/HomeMenu'
import SectionHeaders from '../components/layout/SectionHeaders'

export default function Home() {
  return (
<>
<Hero/>
<HomeMenu/>
<section className='text-center my-16'>
      <SectionHeaders 
      subHeader={'Our story'}
      mainHeader={'About us'}
      />
      <div className='text-gray-500 max-w-md mx-auto mt-4
      flex flex-col gap-4'
      >
      <p>
        Tempor eiusmod nisi cillum nisi amet Lorem. 
        Id ipsum sit mollit id. Aliquip aute dolor ullamco quis velit. Occaecat fugiat quis qui occaecat duis eu deserunt amet. 
        Cupidatat sint sit irure amet elit aliquip minim duis exercitation eiusmod reprehenderit.
      </p>
      <p>
        Tempor eiusmod nisi cillum nisi amet Lorem. 
        Id ipsum sit mollit id. Aliquip aute dolor ullamco quis velit. Occaecat fugiat quis qui occaecat duis eu deserunt amet. 
        Cupidatat sint sit irure amet elit aliquip minim duis exercitation eiusmod reprehenderit.
      </p>
      </div>
    </section>
    <section className='text-center my-8'>
      <SectionHeaders
      subHeader={'Don\'t hesitate'}
      mainHeader={'Contact us'}
      />
      <div className='mt-2'>
      <a className='text-4xl underline text-gray-500' href="tel:+630498347963">
        +630498347963
      </a>
      </div>
    </section>
</>
  )
}
