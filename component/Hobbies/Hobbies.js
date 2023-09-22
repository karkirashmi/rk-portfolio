import React from 'react'
import Hobin from './Hobin'
import './Hobbies.css'


const Hobbies = () => {
    return (
        <div>
            <div className='hobby'>
                <h1><u>Hobbies and Extra Curricular Activities:</u></h1>
                <Hobin heading="Dancing:"
                    description="Dance is a universal language that transcends barriers and speaks to the heart. Through each dance step, I express joy, sorrow, passion, and love. It's a way of communicating without words, connecting with others, and celebrating the beauty of movement." />

                <Hobin heading="Painting:"
                    description="Being a UI/UX Designer, colour always played important role in my life and painting is art of making innovative things through different colours that's why I love it." />
                <Hobin heading="Cooking :"
                    description=" I believe that a well-cooked meal has the power to bring people together, evoke emotions, and leave lasting impressions. So I love cooking." />
                <Hobin heading="Writing:"
                    description="I have a deep and abiding love for the written word. Writing isn't just a hobby for me; it's a way of life, a means of expression, and a journey into the realms of creativity and storytelling." />

            </div>
        </div>
    )
}

export default Hobbies
