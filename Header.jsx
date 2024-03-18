import React from 'react'
import './Header.css'
import {Link} from "react-scroll"
function Header() {
  return (
    <div className='Header_main'>
        <div className='Header_left'>
            <h2>PriyaDarshiny</h2>
        </div> 

<div className='Header_right'>
<Link to="home" smooth={true} duration={500}>
    <h4>Home</h4>
</Link>

<Link to="skill" smooth={true} duration={500}>
    <h4>Skill</h4>
</Link>

<Link to="project" smooth={true} duration={500}>
    <h4>Project</h4>
</Link>

<Link to="about" smooth={true} duration={500}>
    <h4>About</h4>
</Link>

<Link to="contact" smooth={true} duration={500}>
    <h4>Contact</h4>
</Link>
</div>


    </div>
  )
}

export default Header