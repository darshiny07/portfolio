import React from 'react'
import { Element } from 'react-scroll'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import myProfile from './profile.webp'
import './Contact.css'
function Contact() {
  return (
<Element>
    <div className='Contact_container'>
    <h2>CONTACT ME</h2>
<div className='Contact_info'>
  
    <p>You can contact me via email, LinkedIn, or Instagram.</p>
    <div className='Contact_item'>
<EmailIcon/>
<a href="mailto:spriyadarshiny073@gmail.com">Email</a>
    </div>

    <div className='Contact_item'>
<CallIcon/> 
<a href="">7548866289</a>
    </div>

    <div className='Contact_item'>
<LinkedInIcon/>
<a href="https://www.linkedin.com/in/priya-darshiny-s-/">LinkedIn</a>
    </div>

    <div className='Contact_item'>
<InstagramIcon/>
<a href="https://www.linkedin.com/in/priya-darshiny-s-/">Instagram</a>
    </div>

    <div className='Contact_item'>
<GitHubIcon/>
<a href="https://www.linkedin.com/in/priya-darshiny-s-/">LinkedIn</a>
    </div>
</div>

<div className='myProfile'>
    <img src={myProfile} alt="profile" />
</div>
    </div>
    </Element>
  )
}

export default Contact