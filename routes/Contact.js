import React from 'react'

import './Contact.css'
import Navbar from '../component/Navbar/Navbar'
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../component/Footer/Footer'

const Contact = () => {
  return (
    <div className='mycontact'>
      <Navbar />
      <div className='maincontact'>
        <h3>THANKYOU FOR VISITING MY PORTFOLIO. FEEL FREE TO CONTACT ME<br/>

       <h2>For contacting me: <br/></h2>

          Email: karkirashmi04@gmail.com
          <div className='social2'>
          <center>
                            <a href="https://www.linkedin.com/in/your-username">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/karkirashmi">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://app.netlify.com/teams/karkirashmi/overview">
                                <i className="fa fa-cloud"></i>
                            </a>

                            <a href="https://www.behance.net/rashmikarki">
                                <i className="fa fa-behance"></i> 
                            </a>
                        </center>
          </div>
        </h3></div>
        <Footer />
    </div>
  )
}

export default Contact
