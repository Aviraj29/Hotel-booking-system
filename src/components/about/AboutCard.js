import React from 'react'
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
            <h4>About Us</h4>
            <h1>we <span>provide solution</span> to grow your bussines
            </h1>
            <p>As part of the HumaraStay community, you're not just a traveler – you're family. We invite you to explore our listings, discover new horizons, and embark on a journey of comfort, connection,</p>
            <p> and exploration.Thank you for choosing HumaraStay as your travel companion. Your journey is our journey, and we can't wait to be a part of it.</p>
            <button className='secondary-btn'> 
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
        </div>
        <div className='row image'>
            <img src='/images/gallery/banner1.webp' alt='guest-img' height={320} width={600}/>
            <div className='control-btn'>
                <button className='prev'>
                <i className='fas fa-play'></i>
                </button>
               
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
