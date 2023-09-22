import React from 'react'
import "./Expertise.css"
import Exp from './Exp'


const Expertise = () => {
  return (
    <div className='new'>
      <div className='head'>
        <u>MY EXPERTISE:</u>
      </div><br />
      <h1>1. Web Development:</h1>
      <div className='list'>
        <Exp name='HTML'  />
        <Exp name='CSS' />
        <Exp name='WORDPRESS' />
        <Exp name='REACT.JS' />
        <Exp name='JAVASCRIPT' />
      </div>
      <h1>2. UI/UX TOOLS:</h1>
      <div className='list'>
        <Exp name='FIGMA' />
        <Exp name='ADOBE ILLUSTRATOR' />
        <Exp name='CANVA' />
      </div>

      <h1>3. DATABASE:</h1>
      <div className='list'>
      <Exp name='MYSQL' />
        <Exp name='MONGODB' />
        <Exp name='MONGOOSE' />
      </div>

      <h1>4. BACKEND TECHNOLOGY:</h1>
      <div className='list'>
      <Exp name='NODE.JS' />
        <Exp name='EXPRESS' />
      </div>

      <h1>5. FRAMEWORKS:</h1>
      <div className='list'>
      <Exp name='BOOTSTRAP' />
        <Exp name='JQUERY' />
        <Exp name='TAILWIND' />

      </div>
    </div>
  )
}

export default Expertise

