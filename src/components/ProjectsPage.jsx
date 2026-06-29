import React from 'react';
import { Code2, ArrowUpRight, Github, Shield } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectsPage = () => {
  const { cybersecurity, others } = projectsData;

  const renderProjectCard = (project, index) => {
    return (
      <div key={index} className="homepage-project-card">
        <div className="project-card-info">
          <h3 className="project-title" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
            {project.title}
          </h3>
          
          <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {project.tags.map((tag, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span style={{ color: 'var(--border-color)', userSelect: 'none' }}>&bull;</span>}
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
            alt={`${project.title} Preview`} 
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section" style={{ width: '100%', gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Code2 size={32} strokeWidth={2.5} style={{ color: 'var(--text-primary)' }} />
        </div>
        <h2 className="section-title" style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--text-primary)', textAlign: 'center', margin: '0.4rem 0 0.2rem 0' }}>Projects</h2>
        <hr className="section-divider" style={{ margin: '0 auto 1.5rem auto' }} />
      </div>

      {/* 1. Cybersecurity Section */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', width: '100%', textAlign: 'left', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={18} style={{ color: 'var(--accent-color)' }} />
          Cybersecurity
        </h3>
        
        <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          {cybersecurity.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>

      {/* 2. Others Section */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
        <hr className="section-divider" style={{ width: '100%', maxWidth: '20rem', height: '1px', backgroundColor: 'var(--border-color)', border: 'none', margin: '0.5rem auto 1rem auto', opacity: 0.6 }} />
        
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', width: '100%', textAlign: 'left', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Code2 size={18} style={{ color: 'var(--accent-color)' }} />
          Others
        </h3>
        
        <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          {others.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>

      {/* Informal Footer */}
      <hr className="section-divider" style={{ width: '100%', maxWidth: '20rem', height: '1px', backgroundColor: 'var(--border-color)', border: 'none', margin: '1.8rem auto 1rem auto', opacity: 0.6 }} />
      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', textAlign: 'center', margin: '0 0 1rem 0', maxWidth: '36rem' }}>
        Have an idea, project, or security challenge in mind? I'd love to collaborate and build something meaningful together.
      </p>
    </section>
  );
};

export default ProjectsPage;
