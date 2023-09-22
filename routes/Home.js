import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Expertise from '../component/Expertise/Expertise'
import Work from '../component/Work/Work'
import Courses from '../component/Courses/Courses'
import Education from '../component/Education/Education'
import Hobbies from '../component/Hobbies/Hobbies'
import Footer from '../component/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Expertise/>
      <Work/>
      <Courses/>
      <Education/>
      <Hobbies/>
      <Footer/>
    </div>
  )
}

export default Home
