import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import './About.css'
const About = () => {
  return (
    <div className='whole'>
      <Navbar />

      <div className='myabout'>
        <h1>Namastay!</h1>
        <h3>
          Hello! I'm Rashmi Karki, a dedicated student and passionate individual with a love for technology, creativity, and exploration.
          <br />
          <h2>MyAcademic Journey:</h2>
          Currently, I am pursuing my Master's in Computer Applications (MCA) at Govind Ballabh Pant University Of Agriculture and Technology in Pantnagar. My academic journey started with a Bachelor's in Computer Applications (BCA) from Kumaun University, SSJ (Soban Singh Jeena) Campus, Almora. These educational experiences have equipped me with the knowledge and skills to thrive in the world of technology.
          <br />
          <h2>My Educational Background:</h2>

          Pursuing MCA (Master’s in Computer Applications) at G.B.P.U.A.T., Pantnagar.
          Graduated with a BCA (Bachelor’s in Computer Applications) from Kumaun University, SSJ Campus, Almora.
          <br />       <h2>My Interests and Hobbies:</h2>
          Beyond the world of technology, I have a diverse set of interests and hobbies that keep me inspired and balanced. When I'm not coding or working on tech projects, you can find me:

          Dancing - Expressing myself through dance is a source of joy and creativity.
          Painting - Using colors and canvas to bring my imagination to life.
          Cooking - Experimenting with flavors and cuisines to satisfy my culinary curiosity.
          Writing - Putting my thoughts into words and exploring the art of storytelling.
          Designing - Creating visually appealing designs that merge aesthetics with functionality.
          Traveling - Exploring new places, cultures, and cuisines, which broadens my horizons.
          Reading - Delving into books that expand my knowledge and spark my imagination.
          <br /> My Vision:
          I am driven by a vision of leveraging my technical expertise to create innovative solutions that address real-world challenges. Whether it's through coding, design, or the written word, I strive to make a positive impact on the world around me.

          <br /><h2>Let's Connect:</h2>
          I am always open to new opportunities, collaborations, and conversations. Whether you're interested in discussing a project, sharing creative ideas, or simply connecting over shared interests, please feel free to reach out to me. You can contact me via email at karkirashmi04@gmail.com or connect with me on linkedin.
        </h3>
      </div>
      <Footer />
    </div>
  )
}

export default About
