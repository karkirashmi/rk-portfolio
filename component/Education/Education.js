import React from 'react'
import Edup from './Edup'
import './Education.css'

const Education = () => {
  return (
    <div className='details'>
      <h1><u>MY EDUCATIONAL QUALIFICATION:</u></h1>
      <Edup subject="Pursuing"
        desc="MCA(Master’s in Computer Applications)
      from G.b.p.u.a.t. (Govind Ballabh Pant University Of Agriculture and Technology), Pantnagar."/>


      <Edup subject="Graduation:"
        desc="BCA(Bachelor’s in Computer Applications)
      from Kumaun University, SSJ (Soban Singh Jeena) Campus ,Almora."/>

      <Edup subject="Inter School:"
        desc="Lakes International School, Bhimtal." />

      <Edup subject="High School:"
        desc="Campus School , Pantnagar." />
    </div>
  )
}

export default Education
