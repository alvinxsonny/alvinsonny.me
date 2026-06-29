import React from 'react';
import { Code2, ArrowUpRight, Github } from 'lucide-react';
import topProjectsData from '../data/top_projects.json';

const TopProjects = ({ handleNavClick }) => {
  return (
    <section id="top-projects" className="section" style={{ width: '100%' }}>
      <div className="section-icon">
        <Code2 />
      </div>
      <h2 className="section-title">Top Projects</h2>
      <hr className="section-divider" />
      
      <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', marginBottom: '1.5rem', marginTop: '1rem' }}>
        
        {topProjectsData.map((project, idx) => (
          <div key={idx} className="homepage-project-card">
            <div className="project-card-info">
              <h3 className="project-title" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                {project.name}
              </h3>
              <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {project.tags.map((tag, tagIdx) => (
                  <React.Fragment key={tagIdx}>
                    {tagIdx > 0 && <span style={{ color: 'var(--border-color)', userSelect: 'none' }}>&bull;</span>}
                    <span>{tag}</span>
                  </React.Fragment>
                ))}
              </div>
              <p className="project-desc" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-resume-btn"
                  style={{ marginTop: 0, padding: '0.45rem 1rem', fontSize: '0.75rem', fontWeight: '700', borderRadius: '6px', textDecoration: 'none' }}
                >
                  VIEW DEMO
                  <ArrowUpRight size={14} />
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-resume-btn"
                  style={{ marginTop: 0, padding: '0.45rem 1rem', fontSize: '0.75rem', fontWeight: '700', borderRadius: '6px', textDecoration: 'none' }}
                >
                  GITHUB
                  <Github size={14} />
                </a>
              </div>
            </div>
            <div className="project-preview-wrapper">
              <img 
                src={project.imageSrc} 
                alt={`${project.name} Preview`} 
              />
            </div>
          </div>
        ))}

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
        <button 
          onClick={() => handleNavClick('projects')}
          className="hero-resume-btn"
        >
          ALL PROJECTS
          <ArrowUpRight />
        </button>
      </div>
    </section>
  );
};

export default TopProjects;
