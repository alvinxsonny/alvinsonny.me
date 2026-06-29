import React from 'react';
import { Award, FileText, Shield, Trophy } from 'lucide-react';
import certificationsData from '../data/certifications.json';

const CertificationsPage = () => {
  const { cybersecurityAndIT, courseCertificates, awards } = certificationsData;

  const getStatusColor = (type) => {
    switch (type) {
      case 'primary-goal': return '#a855f7'; 
      case 'in-progress': return '#3b82f6'; 
      case 'active': return '#10b981'; 
      default: return '#71717a'; 
    }
  };

  const renderCertCard = (cert, index) => {
    return (
      <div key={index} className="project-card" style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: 'var(--pill-bg)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', width: '100%' }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
              {cert.code}
            </h4>
            <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', margin: '0.1rem 0 0 0' }}>
              {cert.name} &bull; <span style={{ color: 'var(--text-tertiary)' }}>{cert.issuer}</span>
            </p>
          </div>
          {cert.imageUrl && (
            <span className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="badge-dot" style={{ backgroundColor: getStatusColor(cert.statusType) }}></span>
              {cert.status}
            </span>
          )}
        </div>

        {/* Display Certificate Image or In Progress container in place of description */}
        {cert.imageUrl ? (
          <div 
            className="custom-image-viewer" 
            onClick={() => window.open(cert.imageUrl, '_blank')}
            style={{ 
              width: '100%', 
              aspectRatio: '1.414', 
              border: '1px solid var(--border-color)', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              marginTop: '0.4rem', 
              cursor: 'pointer',
              position: 'relative',
              backgroundColor: '#ffffff'
            }}
            title="Click to view full image"
          >
            <img 
              src={cert.imageUrl} 
              alt={`${cert.code} Certificate`} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
            />
          </div>
        ) : (
          <div style={{ width: '100%', height: '180px', border: '1px dashed var(--border-color)', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--pill-bg-hover)', color: 'var(--text-tertiary)', gap: '0.4rem', marginTop: '0.4rem' }}>
            <FileText size={22} style={{ color: cert.isPrimaryGoal ? '#a855f7' : 'var(--text-tertiary)' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: cert.isPrimaryGoal ? '#a855f7' : 'var(--text-tertiary)', letterSpacing: '0.02em' }}>
              {cert.isPrimaryGoal ? 'In Progress (Primary Target Goal)' : 'In Progress'}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="certificates" className="section" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Award size={32} strokeWidth={2.5} style={{ color: 'var(--text-primary)' }} />
        </div>
        <h2 className="section-title" style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--text-primary)', textAlign: 'center', margin: '0.4rem 0 0.2rem 0' }}>Certifications</h2>
        <hr className="section-divider" style={{ margin: '0 auto 1.5rem auto' }} />
      </div>

      {/* 1. Primary Cybersecurity Certifications */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', width: '100%', textAlign: 'left', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={18} style={{ color: 'var(--accent-color)' }} />
          Cybersecurity &amp; IT Certifications
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
          {cybersecurityAndIT.map((cert, index) => renderCertCard(cert, index))}
        </div>
      </div>

      {/* 2. Course Certificates Section */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.5rem', gap: '1rem' }}>
        <hr className="section-divider" style={{ width: '100%', maxWidth: '20rem', height: '1px', backgroundColor: 'var(--border-color)', border: 'none', margin: '0.5rem auto 1rem auto', opacity: 0.6 }} />
        
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', width: '100%', textAlign: 'left', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={18} style={{ color: 'var(--accent-color)' }} />
          Course Certificates
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
          {courseCertificates.map((cert, index) => renderCertCard(cert, index))}
        </div>
      </div>

      {/* 3. Awards Section */}
      <div id="awards-section" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.5rem', gap: '1rem' }}>
        <hr className="section-divider" style={{ width: '100%', maxWidth: '20rem', height: '1px', backgroundColor: 'var(--border-color)', border: 'none', margin: '0.5rem auto 1rem auto', opacity: 0.6 }} />
        
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', width: '100%', textAlign: 'left', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trophy size={18} style={{ color: 'var(--accent-color)' }} />
          Awards
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
          {awards.map((cert, index) => renderCertCard(cert, index))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsPage;
