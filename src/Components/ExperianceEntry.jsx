import React from 'react'
import './../Pages/Styles/Experience.css'

const ExperienceEntry = ({ company, position, duration, description , index}) => {
    return (
      <div className={ index%2== 0 ? "container left" : "container right"}>
        <div className="content">
          <div className="tag">
            <h2>{company}</h2>
          </div>
          <div className="desc">
            <h3>{position}</h3>
            <p>{duration}</p>
            <ul>
              {description.length > 0 && description.map((elem , idx )=> {
                return <li key={idx}> {elem}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default ExperienceEntry;