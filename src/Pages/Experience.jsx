import React from 'react'
import ExperienceEntry from '../Components/ExperianceEntry'
import ExperienceData from "./Config/Experiance.json"

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="timeline">

        {
          ExperienceData.map( ( Experiance  , index )=> {
            return (
              <ExperienceEntry
              company={Experiance.company}
              position={Experiance.position}
              duration= {Experiance.duration}
              description= {Experiance.description}
              index ={index}
              />
            )
          })
        }
        
      </div>

    </section>
  )
}
