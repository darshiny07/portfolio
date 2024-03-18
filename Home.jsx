import React from 'react'
import './Home.css'
import profile from './profile.webp'
function Home() {
  return (
    <div className='Home_main'>
<div className='Home_name'>
    <h1>Hai , I'm Priyadarshiny</h1>
    <h2>Front-End Developer</h2>
</div>

<div className='profile'>
    <img src={profile} alt="myphoto" className='profile_img' />
</div>
    </div>
  )
}

export default Home