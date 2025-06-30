import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExperienceData from './Config/Experiance.json';
import { motion } from 'framer-motion';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const exp = ExperienceData[parseInt(id)];

  if (!exp) return <div>Experience not found.</div>;

  return (
    <motion.section className="experience-detail" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <button className="btn" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>&larr; Back</button>
      <div className="detail-container">
        <div className="detail-content">
          <h2>{exp.company}</h2>
          <h3>{exp.position}</h3>
          <p><strong>Duration:</strong> {exp.duration}</p>
          <ul>
            {exp.description && exp.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceDetail; 