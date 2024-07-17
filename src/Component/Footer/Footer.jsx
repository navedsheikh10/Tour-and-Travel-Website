import React from 'react'
import './FooterStyle.css'
import { AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import { BsTwitter, BsInstagram, BsTelephonePlusFill, BsFillEnvelopePaperFill, BsLinkedin} from 'react-icons/bs'
import {FaMapMarkerAlt, FaMapPin} from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Footer = () => {
  return (
    <div>
        <footer className="footer-distributed">

<div className="footer-left" data-aos="fade-up">
    {/* <h3>Pak<span>Vi</span><FaMapPin style={{color:'#FF0000'}}/></h3> */}

    <p className="footer-links">
        <a href="#">Home </a>
        |
        <a href="#">About </a>
        |
        <a href="#">Contact </a>
        |
        <a href="#">Blog</a>
    </p>

    <p className="footer-company-name">Copyright © 2024 <strong>HindVisits!</strong> All rights reserved to Naved Sheikh</p>
</div>

<div className="footer-center" data-aos="fade-up">
    <div>
        <FaMapMarkerAlt style={{color:'whitesmoke'}}/> <p>Bhopal, Madhya Pradesh</p>      
    </div>

    <div>
    <BsTelephonePlusFill style={{color:'whitesmoke',}}/>
    <a href="phone"><p>9179177889</p></a>
    </div>
    <div>
        <BsFillEnvelopePaperFill style={{color:'whitesmoke',margin:'3px'}}/>
        <p><a href="mailto:sagar00001.co@gmail.com">navedsheikh@gmail.com</a></p>
    </div>
</div>
<div className="footer-right" data-aos="fade-up">
    <p className="footer-company-about">
        <span>About the company</span>
        <strong>HindVisits!</strong> is a tour base company with HindVisits you can be able to 
        visit all the beautiful places of India.
    </p>
    <div className="footer-icons">
        <a href="#"><AiFillFacebook/></a>
        <a href="#"><AiFillYoutube/></a>
        <a href="#"><BsTwitter/></a>
        <a href="#"><BsInstagram/></a>
        <a href="#"><BsLinkedin/></a>
    </div>
</div>
</footer>
    </div>
  )
}

export default Footer
