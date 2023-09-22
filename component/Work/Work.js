import React from 'react'
import './Work.css'
import Card from './Card'

const Work = () => {
    return (
        <div className='work-subpart'>
            <div className='work-head'>
                <center><u>MY WORK:</u></center>
            </div><br />
            <div className='main'>
                <Card
                    title="Eatsdelight"
                    content="
                    This project is a web-based restaurant website developed using React, designed to provide an engaging and informative online presence for a restaurant. It serves as a digital platform for potential customers and food enthusiasts to explore the restaurant's offerings."
                    linkTo="https://github.com/karkirashmi/EatsDelight"
                />
                <Card
                    title="Minor e-com website"
                    content="here shopping meets convenience, quality, and style. We've crafted a curated selection of products with you in mind, and we're delighted to be your trusted destination for online shopping.Its a simple website that have some parts. It only include the front look of e-com website. "
                    linkTo=" https://karkirashmi.github.io/minor-ecom-website/"
                />
                <Card
                    title="Acadify"
                    content="At Acadify, we believe that learning is a lifelong adventure, and we're here to guide you on that journey.We've created a platform where education meets excellence, where knowledge knows no boundaries, and your personal growth and professional success take center stage."
                    linkTo=" https://karkirashmi.github.io/Acadify/"
                />
                <Card
                    title="MKVN School website"
                    content="Explore Maharishi Kanva Vidya Niketan School's static website, serving the educational community in Kotdwar. This online platform provides valuable information and resources for students, parents, and educators at the school in Uttarakhand. "
                    linkTo="https://karkirashmi.github.io/MKVN.github.io/"
                />
                <Card
                    title="RhythmRumble game"
                    content="he game that include some instrument that works on mouse
                    click and key press.Its a simple sound producing game ,whatever instrument will be pressed that sound will be produced.
                    The languages used in this website are html, css, javascript."
                    linkTo="https://karkirashmi.github.io/RhythmRumble/"
                />
                <Card
                    title="TempleTour: Explore the Unexplored"
                    content="Discover the spiritual heart of Uttarakhand, including the revered Char-Dham, on 'Templetour.' This website, crafted with HTML, CSS, and JavaScript, offers a comprehensive guide to the region's sacred temples, enriching your pilgrimage experience."
                    linkTo="https://karkirashmi.github.io/TempleTour/"
                />
                <Card
                    title="SSJ website"
                    content="Explore SSJ Campus's website for comprehensive information on courses, dedicated faculty, vital notes, and past year papers. Your one-stop destination for academic excellence and success. Its time to accomplish ypur goals."
                    linkTo="https://karkirashmi.github.io/SSJwebsite/"
                />
                <Card
                    title="Figma Designs"
                    content="This Figma link contains a diverse range of design assets and projects, showcasing our creative work across various categories. Explored user interface (UI) and user experience (UX) designs, web layouts, mobile app prototypes, graphic design elements, and more. "
                    linkTo="https://drive.google.com/drive/folders/1RfwAcSC_r9O-w-UXw9ubC47mienB9oru?usp=drive_link"
                />
            
            </div>
        </div>
    )
}

export default Work
