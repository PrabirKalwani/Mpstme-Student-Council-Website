export const metadata = {
    title: 'Editorial BoardMPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/iec.png'    
  import Flagships from '@/components/flagships'
  import '@/app/css/changes.css'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">IEC</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">To help in the development of India's innovation and entrepreneurial ecosystem. Providing a platform to the innovators of India to interact, debate and find sustainable solutions. Enlightening and inspiring, by creating a culture of interaction between young students and aspiring entrepreneurs, mentors, angel investors, corporates and so on. To provide opportunities to students for entrepreneurial skill development, helping them understand how to overcome challenges and risks. To provide a platform for transforming existing ideas into potential businesses</p> 
              </div>
            
  
  
              <Flagships
            events={[
              {
                description:"              Life Of an Entrepreneur A thought-provoking session for the students of MPSTME understand the Entrepreneurial Lifecycle from the co-founders of different startups. Time Capsule A fun activity wherein over 300 students wrote a letter to their future selves. These letters were returned to the students at the end of the academic year. The motive behind this was to boost their morale and bring in them a sense of accomplishment                 " ,
              },
            ]}
/>
  
          </div>
        </div>
      </section>
  
          </div>
        </div>
        <Footer />
  
      </section>
      
    )
  }
  