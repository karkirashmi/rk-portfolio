
import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import'./Cv.css'

const Cv = () => {
  return (
    <div>
      <Navbar />
      <div className='mycv'>
      Hello, and thank you for visiting my personal portfolio website. Here, you'll find an overview of my academic background, professional experiences, and skills. I'm passionate about everything, and I'm excited to share my journey with you.<br/>take a look in my cv.
        <div className='new-link'>

          <a href='https://drive.google.com/file/d/1J-bytWVOEmIxcuX9ZCeeBCRr14z9X-Hp/view?usp=drive_link'>LINK FOR MY CV</a><br/>
          <a href='https://drive.google.com/drive/my-drive'>LINK FOR MY DRIVE</a>
        </div></div>
        <Footer />
      
    </div>
  )
}
export default Cv
