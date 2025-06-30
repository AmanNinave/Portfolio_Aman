import React from 'react'
import './Styles/Projects.css' 
import ProjectsData from './Config/Projects.json'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <section className="work" id="work">
        <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects </h2>
        <div className="box-container">

            {
                ProjectsData.map( (project , idx ) => {
                  return (
                    <div key={idx} className="box tilt">
                        <img draggable="false" src={project.img} alt="" />
                        <div className="content">
                            <div className="tag">
                                <h3> {project.title} </h3>
                            </div>
                            <div className="desc">
                                <p> {project.description} </p>
                                <br />
                                <p> <span className='bold'>Tech Stacks :- </span> {project.tech_stack} </p>
                                <br />
                                <p> <span className='bold'>Features :- </span> {project.features} </p>
                                <div className="btns">
                                    <a href={project.deployed} className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
                                    <a href={project.github} className="btn" target="_blank"><i className="fas fa-code"></i> Code</a>
                                    <Link to={`/projects/${idx}`} className="btn"><i className="fas fa-info-circle"></i> Details</Link>
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
