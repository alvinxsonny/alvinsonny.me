import React from 'react';
import { Briefcase, ArrowUpRight, ChevronUp, ChevronDown } from 'lucide-react';
import experiencesData from '../data/experiences.json';

const Experiences = ({ expandedExperiences, toggleExperience }) => {
  return (
    <section id="experiences" className="section" style={{ width: '100%' }}>
      <div className="section-icon">
        <Briefcase />
      </div>
      <h2 className="section-title">Experiences</h2>
      <hr className="section-divider" />
      
      <div className="experiences-list-container" style={{ position: 'relative', width: '100%' }}>
        {/* Dotted vertical line connecting the pictures */}
        <div className="vertical-dotted-line" style={{
          position: 'absolute',
          left: '46px',
          top: '24px',
          bottom: '24px',
          width: '0',
          borderLeft: '3px dotted var(--text-tertiary)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="experiences-content" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem', position: 'relative', zIndex: 1 }}>
          
          {experiencesData.map((exp) => (
            <div key={exp.id} className="education-layout-row" style={{ alignItems: 'flex-start' }}>
              <div className="education-logo-squircle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '92px', height: '48px', padding: '4px 10px', backgroundColor: '#ffffff', flexShrink: 0 }}>
                <img 
                  src={exp.imageSrc} 
                  alt={`${exp.companyName} Logo`} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="education-details" style={{ width: '100%' }}>
                <p className="education-title">{exp.jobTitle}</p>
                <div className="education-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="education-link"
                  >
                    {exp.companyName} - {exp.location}
                    <ArrowUpRight size={14} />
                  </a>
                  <span className="education-year">{exp.timeline}</span>
                </div>
                <p className="timeline-desc" style={{
                  marginTop: '0.4rem',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  display: expandedExperiences[exp.id] ? 'block' : '-webkit-box',
                  WebkitLineClamp: expandedExperiences[exp.id] ? 'none' : 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {exp.description}
                </p>
                <button
                  onClick={() => toggleExperience(exp.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-tertiary)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginTop: '0.3rem',
                    padding: 0,
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  className="exp-toggle-btn"
                >
                  {expandedExperiences[exp.id] ? 'Show Less' : 'Show More'}
                  {expandedExperiences[exp.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experiences;
