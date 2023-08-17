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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt sunt quia adipisci, consectetur suscipit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt sunt quia adipisci, consectetur suscipit?</p>
            <button className='secondary-btn'> 
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
        </div>
        <div className='row image'>
            <img src='/assets/images/banner1.webp' alt='guest-img' height={320} width={600}/>
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
