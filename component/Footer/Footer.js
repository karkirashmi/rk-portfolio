import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <div className='foot'>
            <div className='foot-header'>
                <Link to="/">
                    <h1>PORTFOLIO</h1>
                </Link>
            </div>
            <div className='foot-content'>
                <div className='one'>
                    <u>The Front-End Developer <br />and UI/UX Designer <br /></u>
                    <h5>karkirashmi04@gmail.com</h5>
                </div>

                <div className='two'>
                    <div className='two-two'>
                        <center></center><a href='https://drive.google.com/file/d/1J-bytWVOEmIxcuX9ZCeeBCRr14z9X-Hp/view?usp=drive_link'>Take a look at my CV</a></div>
                    <div className='header2'>
                        <ul className='nav-menu2'>
                            <li>
                                <Link to="/">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/About">
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link to="/Cv">
                                    CV
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contact">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className='social'>
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
                </div>

            </div>
            <div className='end'>
                <h3>Copyright@2023rashmikarki|All rights reserved|</h3>
            </div>
        </div>
    )
}

export default Footer
