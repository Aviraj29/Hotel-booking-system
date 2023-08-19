import React from 'react'
import AboutCard from './AboutCard'
import './About.css'

const About = () => {
  return (
    <>
      <section className='about top'>
        <div className='container-1'>
        <AboutCard/>
        </div>
      </section>
  
      <section className='features top'>
        <div className='container-1 aboutCard flex_space'>
            <div className='row row1'>
                <h1>
                    Our <span>Features</span>
                </h1>
                <p>One of the foremost 5 star luxury hotels in pune, the Hyatt Regency pune is located minutes away from the pune airport. From the spacious, well-appointed guestrooms and conference spaces to world-class wedding services, the hotel indulges guests in contemporary luxury and convenience to ensure they make the most of being away (from home) when they stay with us.</p>
                <button className='secondary-btn'> 
                  Explore More <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
            <div className='row image'>
            <img src='/images/gallery/guest-2.jpg' alt='guest-img'/>
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
