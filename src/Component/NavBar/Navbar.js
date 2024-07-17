import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest, FaYoutube}  from 'react-icons/fa'
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className= {!nav ? 'logo' : 'logo dark'}>
      <a href="#" style={{color:'whitesmoke'}}> <h2>HindVisits!</h2></a>
      </div>
      <ul className='nav-menu'>
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}><li>Home</li></Link>
        <Link to="destination" spy={true} smooth={true} offset={50} duration={500}><li>Destination</li></Link>
        <Link to="book" spy={true} smooth={true} offset={50} duration={500}><li>Book</li></Link>
        <Link to="travel" spy={true} smooth={true} offset={50} duration={500}><li>travel</li></Link>
        <Link to="view" spy={true} smooth={true} offset={50} duration={500}><li>View</li></Link>

      </ul>
      <div className="nav-icon">
      <BiSearch className='icon' style={{marginRight:'1rem'}}/>
      <BsPerson className='icon'/>
      </div>
      <div className="hamburger-menu" onClick={handleNav}>
      {!nav ? ( <HiOutlineMenuAlt4 className={nav ? 'icon dark' : 'icon'} />) : (<AiOutlineClose style={{ color: '#000',background:'#DEE9F0',borderRadius:'10px' }} className='icon' />)}

      
      </div>

      <div className= {nav ? 'mobile-nav active': 'mobile-nav' } >
        <ul >
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}><li>Home</li></Link>
        <Link to="destination" spy={true} smooth={true} offset={50} duration={500}><li>Destination</li></Link>
        <Link to="book" spy={true} smooth={true} offset={50} duration={500}><li>Book</li></Link>
        <Link to="travel" spy={true} smooth={true} offset={50} duration={500}><li>travel</li></Link>
        <Link to="view" spy={true} smooth={true} offset={50} duration={500}><li>View</li></Link>
        </ul>
        <div className="mobile-buttons-icons">
          <div className="mobile-buttons ">
              <button>Search</button>
              <button>Account</button>
          </div>
          <div className="mobile-icons">
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <FaTwitter className='icon' />
          <FaPinterest className='icon' />
          <FaYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
