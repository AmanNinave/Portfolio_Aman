import React from 'react'
import './Styles/Skills.css'
import SkillsData from './Config/Skills.json';

const categoryOrder = [
  'Frontend',
  'Backend',
  'Database',
  'Programming Languages',
  'Tools',
  'Other'
];

const groupedSkills = SkillsData.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {});

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>
      <div className="skills-categories">
        {categoryOrder.map(category =>
          groupedSkills[category] ? (
            <div key={category} className="skills-category">
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-grid">
                {groupedSkills[category].map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-icon">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <span className="skill-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  )
}
