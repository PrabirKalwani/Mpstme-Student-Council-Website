export const metadata = {
  title: 'Women Empowernment',
  description: '',
}

import Link from 'next/link'
import '../../../css/morecards.css'
import voices from '../../../../public/images/oldimages/voices.png'

import Image from 'next/image'



export default function Committees() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Women Empowenment</h1>
          </div>


</div>
<div className="box-wrapper">
<a href="/committees/WomenEm/voices">
<div className="box">
  <div className="box-icon"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></div>
  <div className="box-label">Women Empowenment</div>
  <div className="box-title">Voices</div>
  <div className="box-image">
    <Image src={voices} alt=""/>
  </div>
</div>
</a>

  
</div>



  </div>

</section>


  )
}
