import Particles from '@tsparticles/react'
import React from 'react'
import './Styles/About.css';
import Profile from "./../../public/vite.svg";

export default function About() {
  return (
    <section className="about" id="about">
        
        <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
        
        <div className="row">
            <div className="image">
                <img draggable="false" className="tilt" src={Profile} alt="" />
            </div>
            <div className="content">
                <h3>I'm Aman</h3>
                <span className="tag">Passionate Full Stack Developer | Tech Mentor </span>
                <p>
                    
                    Love to dig and explore fundamental Engineering concepts around the Web listening to conferences, podcasts 🎧 and reading articles over the Internet.<br />
                    <br />
                    Get to know my skills and what I do in short. 👇
                    <br /><br />
                    I solve problems using Data Structures and Algorithms. ( 500+ problems )

                    <br />
                    </p>

                <br />
                <div className="box-container">
                    <div className="box">
                        <p><span> email : </span> amanninave987@gmail.com</p>
                        <p><span> place : </span> Nagpur, Maharashtra, India </p>
                    </div>
                </div>
                
                <div className="resumebtn">
                    <a href="./assests/Aman_Ninave_Resume.pdf" className="btn"><span>Resume </span>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
