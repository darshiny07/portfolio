import React from 'react'
import './Home.css'
import profile from './profile.webp'
function Home() {
  return (
    <div className='Home_main'>
<div className='Home_name'>
    <h1>Hai , I'm Priyadarshiny</h1>
    <h2>Front-End Developer</h2>
    <p>

"Passionate front-end developer with a hunger for innovation and a drive to explore new technologies. Committed to delivering cutting-edge solutions while continuously expanding my skill set through dedicated learning and exploration. Ready to tackle challenges head-on and contribute to the ever-evolving world of web development."</p>
</div>

<div className='profile'>
    <img src={profile} alt="myphoto" className='profile_img' />
</div>
    </div>
  )
}

export default Home