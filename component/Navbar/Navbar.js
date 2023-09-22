import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import rashmi from '../../assets/rashmi.JPG'

const Navbar = () => {
    return (
        <div className='first'>
            <div className='header'>
                <Link to="/">
                    <h1>PORTFOLIO</h1>
                </Link>
                <div className='header2'>
                    <ul className='nav-menu'>
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
                    <div className='box'>
                        <img src={rashmi} alt='myimg'></img>
                    </div>
                </div>
            </div>


            <div className='box-content'>
                I’m Rashmi Karki.<br />
                <b>The Front-End Developer <br/>and UI/UX Designer</b><hr/>
                
            </div>
            
        </div>
    )
}

export default Navbar
