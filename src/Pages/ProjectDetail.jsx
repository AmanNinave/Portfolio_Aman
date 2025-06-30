import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectsData from './Config/Projects.json';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectsData[parseInt(id)];

  if (!project) return <div>Project not found.</div>;

  return (
    <motion.section className="project-detail" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>
      <button className="btn" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>&larr; Back</button>
      <div className="detail-container">
        <img src={project.img.startsWith('http') ? project.img : `/` + project.img} alt={project.title} style={{ maxWidth: '350px', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }} />
        <div className="detail-content">
          <h2>{project.title}</h2>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Tech Stack:</strong> {project.tech_stack}</p>
          <p><strong>Features:</strong> {project.features}</p>
          <div className="btns">
            <a href={project.deployed} className="btn" target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i> View</a>
            <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> Code</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail; 