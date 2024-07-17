import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Places.css'
AOS.init();
const Places = () => {
  return (
      <div id="destination" className="places">
        <div className="wrapper" >
            <h1>All-InClosive Resorts</h1>
            <p style={{marginTop:'1rem'}}>On the West Best Places</p>
        </div>
        <div className="main-image">
            <div className="image1" >
          <img  src='./Images/borabora.jpg' alt="" />
            </div>
            <div className="image1">
               <div className="image2" >
          <img  src='./Images/babsar top.jpg' alt="" />
          <img  src='./Images/Hunza.jpg' alt="" />
          <img  src='./Images/Naran.jpg' alt="" />
          <img  src='./Images/swat.jpg' alt="" />
          </div>
            </div>
         
        </div>
        </div>
  )
}

export default Places
