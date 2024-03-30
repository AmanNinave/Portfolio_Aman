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
                    I have solved over 500 problems using Data Structures and Algorithms, showcasing a strong grasp of web development technologies such as React, Node.js, MongoDB, and others.
                    <br />
                    My practical experience includes developing real-world applications that enhance efficiency and productivity. I am passionate about mentoring and supporting others in their web development journeys.
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
                    <a href="https://drive.google.com/file/d/18eopvpn2KOoiqy7qVN1KZqylVlpgGohO/view?usp=sharing" className="btn"><span>Resume </span>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
