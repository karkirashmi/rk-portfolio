import React from 'react'
import './Hobin.css'
const Hobin = (props) => {
  return (
    <div className='hobbi'>
      <h2>{props.heading}</h2>
      <h3>{props.description}</h3>
    </div>
  )
}

export default Hobin
