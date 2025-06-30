import React from "react";
import "./Styles/Education.css";
import EducationData from "./Config/Education.json";

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> Education
      </h1>
      <p className="quote" id="quote" style={{ color : "#fff" , fontSize : "1.5rem" }}>
        Education is not the learning of facts, but the training of the mind to
        think. 
      </p>
      <div className="box-container">
        {EducationData.map((elem , idx) => {
          return (
            <div key={idx} className="box">
              <div className="image">
                <a href={elem.college_url}>
                  <img
                    draggable="false"
                    src={elem.college_img}
                    alt=""
                  />
                </a>
              </div>
              <div className="content">
                <h3>{elem.field}</h3>
                <p>{elem.college}</p>
                <h4>{elem.duration}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
