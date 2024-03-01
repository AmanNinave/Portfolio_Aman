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
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default ExperienceEntry;