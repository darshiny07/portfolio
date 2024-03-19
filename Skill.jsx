import React from 'react'
import { Element } from 'react-scroll'
import skill from './skill.avif'
import './Skill.css'
import  { LinearProgress } from '@mui/material';

function Skill() {
  return (
   <Element className='skill_main' name='Skill'>
    
          <div className='skill_img'>
            <img src={skill} alt="" width={'300px'} height={"300px"} />
            </div>

        <div className='skill_text'>
            <h2>SKILLS</h2>
                <h3>Front-End </h3>
            <div className='skillContainer_skillSet'>
                <h5>HTML</h5>
                <div className='skillSet_slider1'>
               <LinearProgress variant='determinate' value={90} color='primary'/>
                </div>
            </div>


            <div className='skillContainer_skillSet'>
                <h5>CSS</h5>
                <div className='skillSet_slider2'>
               <LinearProgress variant='determinate' value={80} color='success'/>
                </div>
            </div>

            <div className='skillContainer_skillSet' >
                <h5>JavaScript</h5>
                <div className='skillSet_slider3'>
               <LinearProgress variant='determinate' value={75} color='success'/>
                </div>
            </div>

            <div className='skillContainer_skillSet' >
                <h5>React Js</h5>
                <div className='skillSet_slider4'>
               <LinearProgress variant='determinate' value={65} color='success'/>
                </div>
            </div>
        </div>

{/* back end skill set */}
        <div className='skill_text2'>
           
                <h3>Back-End </h3>
            <div className='skillContainer_skillSet'>
                <h5>Node Js</h5>
                <div className='skillSet_slider1'>
               <LinearProgress variant='determinate' value={50} color='success'/>
                </div>
            </div>


            <div className='skillContainer_skillSet'>
                <h5>Mongo Db</h5>
                <div className='skillSet_slider2'>
               <LinearProgress variant='determinate' value={70} color='success'/>
                </div>
            </div>

            <div className='skillContainer_skillSet' >
                <h5>My SQL</h5>
                <div className='skillSet_slider3'>
               <LinearProgress variant='determinate' value={65} color='success'/>
                </div>
            </div>

           
        </div>
         
    
   </Element>
  )
}

export default Skill

