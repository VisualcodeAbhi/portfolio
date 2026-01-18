import React, { useState, useEffect } from 'react';
import { resumeData } from './data/resume';
import './styles/portfolio.css';

function App() {
  const { personalInfo, about, experience, education, skills, projects, awards, interests } = resumeData;

  // --- STATE MANAGEMENT ---
  // 1. Theme State (Dark Mode default)
  const [theme, setTheme] = useState('dark');

  // 2. Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // --- SIDE EFFECTS (useEffect) ---
  // When 'theme' changes, update the document body attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // --- HANDLERS ---
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent (simulated).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="portfolio-container">

      {/* Theme Toggle Button */}
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <button onClick={toggleTheme} style={{ fontSize: '1.2rem', padding: '0.5rem' }}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h1>{personalInfo.name}</h1>
        <p className="tagline">{personalInfo.role}</p>
        <p>{personalInfo.tagline}</p>
        <div style={{ marginTop: '0.5rem', color: '#94a3b8' }}>
          {personalInfo.location} | {personalInfo.phone}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <a href={`mailto:${personalInfo.email}`} style={{ marginRight: '1rem' }}>Email Me</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ marginRight: '1rem' }}>LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2>About Me</h2>
        <p>{about}</p>
      </section>

      {/* Experience Section */}
      <section>
        <h2>Experience</h2>
        <div className="grid">
          {experience.map((exp) => (
            <div key={exp.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <h3>{exp.role}</h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{exp.duration}</span>
              </div>
              <p style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <div className="grid grid-2">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3>{project.title}</h3>
                {project.link && project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem' }}>
                    View ↗
                  </a>
                )}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{project.tech}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <div className="grid">
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <h3>{edu.institution}</h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{edu.duration}</span>
              </div>
              <p style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>{edu.degree}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2>Awards & Certifications</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {awards.map((award, index) => (
            <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#38bdf8', marginRight: '10px' }}>🏆</span>
              {award}
            </li>
          ))}
        </ul>
      </section>

      {/* Interests Section */}
      <section>
        <h2>Interests</h2>
        <div className="skill-tags">
          {interests.map((interest, index) => (
            <span key={index} className="skill-tag" style={{ background: 'transparent', borderColor: '#38bdf8' }}>{interest}</span>
          ))}
        </div>
      </section>

      {/* NEW: Contact Section */}
      <section>
        <h2>Contact Me</h2>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'inherit' }}
              />
            </div>
            <button type="submit" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem', color: '#64748b' }}>
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
