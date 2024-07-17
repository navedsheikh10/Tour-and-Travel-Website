import React from 'react'
import './CarousleStyle.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carousle = () => {

  return (
         <div id='view' className="carousle">
      <Carousel className='carousle' >
      <div>
       <img src="./Images/Naran.jpg" alt=""  />
     </div>
     <div>
     <img src="./Images/hunza.jpg" alt=""  />
     </div>
     <div>
     <img src="./Images/malamjaba.jpg" alt=""  />
     </div>
     <div>
     <img src="./Images/babsar top.jpg" alt="" />
      </div>
      <div>
     <img src="./Images/kashmir.jpg" alt="" />
      </div>
      </Carousel>
    </div>

  //      <Carousel effect="fade" autoplay className='carousel '>
  //  
  // </Carousel>

  )
}

export default Carousle
