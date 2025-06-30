import React from 'react'
import ExperienceEntry from '../Components/ExperianceEntry'
import ExperienceData from "./Config/Experiance.json"
import { Link } from 'react-router-dom'

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
              <div key={index}>
                <ExperienceEntry
                  company={Experiance.company}
                  position={Experiance.position}
                  duration= {Experiance.duration}
                  description= {Experiance.description}
                  slug={Experiance.slug}
                  index ={index}
                />
              </div>
            )
          })
        }
        
      </div>

    </section>
  )
}
