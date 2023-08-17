import React from 'react'
import AboutCard from './AboutCard'
import './About.css'

const About = () => {
  return (
    <>
      <section className='about top'>
        <div className='container'>
        <AboutCard/>
        </div>
      </section>
 
      <section className='features top'>
        <div className='container aboutCard flex_space'>
            <div className='row row1'>
                <h1>
                    Our <span>Features</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt sunt quia adipisci, consectetur suscipit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt sunt quia adipisci, consectetur suscipit?</p>
                <button className='secondary-btn'> 
                  Explore More <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
            <div className='row image'>
            <img src='/assets/images/guest-2.jpg' alt='guest-img'/>
            <div className='control-btn'>
                <button className='prev'>
                <i className='fas fa-play'></i>
                </button>
               
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default About;
