import React from 'react'
import './Styles/Skills.css'
import SkillsData from './Config/Skills.json';

export default function Skills() {

  return (
    <section className="skills" id="skills">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>
      <div className="container">
          <div ref={skillsContainer} className="row" id="skillsContainer">
              {
                SkillsData.map((skill) => {
                  return (
                    <div className="bar">
                      <div className="info">
                        <img src={skill.icon} alt="skill" />
                        <span>{skill.name}</span>
                      </div>
                    </div>)
                })
              }
              
          </div>
      </div>
    </section>
  )
}
