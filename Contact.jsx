import React from 'react'
import { Element } from 'react-scroll'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import myProfile from './profile.webp'
// import myProfile from './contactPhoto.jpeg'
import './Contact.css'
function Contact() {
  return (
<Element name="Contact">
    <div className='Contact_container'>
    <h2>CONTACT ME</h2>
<div className='Contact_info'>
  
    <h4>You can contact me via email, LinkedIn, or Instagram.</h4>
    <div className='Contact_item'>
<EmailIcon color='error'/>
<a href="mailto:spriyadarshiny073@gmail.com">Email</a>
    </div>

    <div className='Contact_item'>
<CallIcon color='success'/> 
<a href="">7548866289</a>
    </div>

    <div className='Contact_item'>
<LinkedInIcon color='primary'/>
<a href="https://www.linkedin.com/in/priya-darshiny-s-/">LinkedIn</a>
    </div>

    <div className='Contact_item'>
<InstagramIcon color='secondary'/>
<a href="https://www.instagram.com/hajime__02?igsh=MXRiN2k3Ym9lMThkMg==">Instagram</a>
    </div>

    <div className='Contact_item'>
<GitHubIcon/>
<a href="https://github.com/darshiny07">Github</a>
    </div>

    <div className='Contact_item'>
<DriveFolderUploadIcon color='warning'/>
<a href="https://drive.google.com/file/d/1xOn2hh8nmw9CvrwkBUGjXpXF-xhzCPX1/view?usp=drivesdk">Resume</a>
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