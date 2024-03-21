import React from 'react'
import { Element } from 'react-scroll'
import './Skill.css'
import  { LinearProgress } from '@mui/material';

function Skill() {
  return (
   <Element  name='Skill'>
    <div className="skill_heading">
        <h2>SKILLS</h2>
    </div>
 
<div className='full_Container'>
    <div className="skillset_front">
        <h2>FRONT-END </h2>
        <div className="skill_item">
            <h5>HTML 90%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={90} color='success'/>
            </div>
        </div>

        <div className="skill_item">
            <h5>CSS 80%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={80} color='secondary' />
            </div>
        </div>

        <div className="skill_item">
            <h5>JavaScript 75%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={75} color='warning'/>
            </div>
        </div>

        <div className="skill_item">
            <h5>React Js 70%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={70} color='primary'/>
            </div>
        </div>
    </div>

    {/* back end skill set */}
    <div className="skillset_Back">
        <h2>BACK-END </h2>
        <div className="skill_item">
            <h5>Node Js 50%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={50} color='warning'/>
            </div>
        </div>

        <div className="skill_item">
            <h5>Mongo DB 70%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={70} color='secondary'/>
            </div>
        </div>

        <div className="skill_item">
            <h5>My SQL 65%</h5>
            <div className="progress_bar">
                <LinearProgress variant='determinate' value={65} color='primary'/>
            </div>
        </div>
    </div>
    </div>
   </Element>
  )
}

export default Skill
