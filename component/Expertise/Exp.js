import React from 'react'
import './Exp.css'


const Exp = (props) => {
  return (
    <div className='names'>
      <h2>{props.name}</h2> 
      <h2>{props.rating}</h2>
    </div>
  )
}

export default Exp
