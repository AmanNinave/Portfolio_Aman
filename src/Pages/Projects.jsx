import React from 'react'
import './Styles/Projects.css' 
import ProjectsData from './Config/Projects.json'

export default function Projects() {
  return (
    <section className="work" id="work">
        <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
        <div className="box-container">

            {
                ProjectsData.map( project => {
                  return (
                    <div className="box tilt">
                        <img draggable="false" src={project.img} alt="" />
                        <div className="content">
                            <div className="tag">
                                <h3> {project.title} </h3>
                            </div>
                            <div className="desc">
                                <p> {project.description} </p>
                                <div className="btns">
                                    <a href={project.github} className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
                                    <a href={project.deployed} className="btn" target="_blank"><i className="fas fa-code"></i> Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  )
                })
            }
            
        </div>
           
    </section>
  )
}
