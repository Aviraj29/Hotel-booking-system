import React from 'react'
import GalleryData from './GalleryData'
import Card from './Card'
import "./Gallery.css"
const Gallery = (props) => {
  return (
    <>
    {/* <headTitle/> */}

    <section className='gallery top'>
      <div className='container grid'>
        {GalleryData.map((value) => {
          return <Card images={value.img} title={value.title}/>
        })} 

      </div>
    </section>
    </>
    

    
  )
}

export default Gallery
