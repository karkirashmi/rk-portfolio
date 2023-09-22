import React from 'react'
import './Card.css'


const Card = (props) => {
    return (
        <div className='upper'>
            <div className='Card'>
                <h1>{props.title}</h1><br />
                <h3>{props.content}</h3> <br />
                <a href={props.linkTo}>VISIT THE SITE</a>
            </div>
        </div>
    )
}

export default Card
