import React from 'react'
import './Edup.css'



const Edup = (props) => {
  return (
    <div className='properties'>
      <h2>{props.subject}</h2>
      <h3>{props.desc}</h3>
    </div>
  )
}

export default Edup

