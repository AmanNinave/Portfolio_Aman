import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExperienceData from './Config/Experiance.json';
import { motion } from 'framer-motion';

const ExperienceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const exp = ExperienceData.find((comp) => comp.slug == slug);
  
  if (!exp) return <div>Experience not found.</div>;

  // Function to get optimized image URL (Cloudinary or fallback)
  const getImageUrl = (link) => {
    // If there's a direct Cloudinary URL, use it
    if (link.cloudinaryUrl) {
      return link.cloudinaryUrl;
    }
    
    // If there's a direct image URL, use it
    if (link.imageUrl) {
      return link.imageUrl;
    }
    
    // Fallback to Google Drive thumbnail
    const fileId = link.link.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
    }
    
    return link.link;
  };

  return (
    <motion.section className="experience-detail" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>
      <button className="btn" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>&larr; Back</button>
      <div className="detail-container">
        <div className="detail-content">
          <h2>{exp.company}</h2>
          <h3>{exp.position}</h3>
          <p><strong>Duration:</strong> {exp.duration}</p>
          
          <div className="description-section">
            <h4>Key Responsibilities & Achievements:</h4>
            <ul>
              {exp.description && exp.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
            </ul>
          </div>

          {/* Performance Section - Only show if performance data exists */}
          {exp.performance && (
            <motion.div 
              className="performance-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>{exp.performance.title}</h4>
              <div className="performance-gallery">
                {exp.performance.links.map((link, idx) => (
                  <motion.div 
                    key={idx}
                    className="performance-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                  >
                    <div className="image-container">
                      <img 
                        src={getImageUrl(link)}
                        alt={`${link.title} ${idx + 1}`}
                        className="performance-image"
                        loading="lazy"
                        onError={(e) => {
                          // If image fails to load, show a fallback
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="fallback-link" style={{ display: 'none' }}>
                        <a 
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="performance-link"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          {link.title} {idx + 1}
                        </a>
                      </div>
                    </div>
                    <div className="image-caption">
                      <span>{link.title} {idx + 1}</span>
                      <a 
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-original"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        View Original
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceDetail; 