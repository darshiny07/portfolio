import React from 'react'
import { Element } from 'react-scroll'
import skill from './skills.avif'
import './Skill.css'
import  { LinearProgress } from '@mui/material';

function Skill() {
  return (
   <Element className='skill_main' name='Skill'>
    
          <div className='skill_img'>
            <img src={skill} alt="skill" width={'300px'} height={"285px"} />
            </div>

            <div className='skill_text'>
          <div className='Skill_header'>
            <h2>SKILLS</h2>
          </div>
          
                <h3>Front-End </h3>
            <div className='skillContainer_skillSet'>
                <h5>HTML 90%</h5>
                <div className='skillSet_slider1'>
               <LinearProgress variant='determinate' value={90} color='primary'/>
                </div>
            </div>


            <div className='skillContainer_skillSet'>
                <h5>CSS 80%</h5>
                <div className='skillSet_slider2'>
               <LinearProgress variant='determinate' value={80} color='primary' />
                </div>
            </div>

            <div className='skillContainer_skillSet' >
                <h5>JavaScript 75%</h5>
                <div className='skillSet_slider3'>
               <LinearProgress variant='determinate' value={75} color='primary'/>
                </div>
            </div>

            <div className='skillContainer_skillSet' >
                <h5>React Js 70%</h5>
                <div className='skillSet_slider4'>
               <LinearProgress variant='determinate' value={70} color='primary'/>
                </div>
            </div>

         

        </div>

{/* back end skill set */}
        <div className='skill_text2'>
           
                <h3>Back-End </h3>
            <div className='skillContainer_skillSet_bEnd'>
                <h5>Node Js 50%</h5>
                <div className='skillSet_slider1'>
               <LinearProgress variant='determinate' value={50} color='primary'/>
                </div>
            </div>


            <div className='skillContainer_skillSet_bEnd'>
                <h5>Mongo DB 70%</h5>
                <div className='skillSet_slider2'>
               <LinearProgress variant='determinate' value={70} color='primary'/>
                </div>
            </div>

            <div className='skillContainer_skillSet_bEnd' >
                <h5>My SQL 65%</h5>
                <div className='skillSet_slider3'>
               <LinearProgress variant='determinate' value={65} color='primary'/>
                </div>
            </div>

           
        </div>
         
    
   </Element>
  )
}

export default Skill

