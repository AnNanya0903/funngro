import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/site';
import ProjectDrawer from './ProjectDrawer';

const Projects = () => {
  const headingText = useTypingEffect(['Featured ']);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [openProject, setOpenProject] = useState(null);
  const gridRef = useRef(null);
  const firstPositions = useRef(null);
  const hasMounted = useRef(false);

  // The command palette can request a specific project's drawer.
  useEffect(() => {
    const onOpenProject = (event) => {
      const project = PROJECTS.find((item) => item.slug === event.detail);
      if (project) {
        setOpenProject(project);
        setActiveCategory('All');
      }
    };
    window.addEventListener('open-project', onOpenProject);
    return () => window.removeEventListener('open-project', onOpenProject);
  }, []);

  const visibleProjects = (activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory)
  )
    .slice()
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  // ---- FLIP: animate cards into their new grid positions when filtering ----
  const capturePositions = () => {
    const map = new Map();
    gridRef.current?.querySelectorAll('.project-card').forEach((el) => {
      map.set(el.dataset.key, el.getBoundingClientRect());
    });
    return map;
  };

  const handleFilter = (category) => {
    if (category === activeCategory) return;
    firstPositions.current = capturePositions();
    setActiveCategory(category);
  };

  useLayoutEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const first = firstPositions.current;
    const grid = gridRef.current;
    if (!grid) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      firstPositions.current = null;
      return;
    }

    const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

    grid.querySelectorAll('.project-card').forEach((el) => {
      const prev = first?.get(el.dataset.key);
      const last = el.getBoundingClientRect();

      if (prev) {
        const dx = prev.left - last.left;
        const dy = prev.top - last.top;
        if (dx || dy) {
          el.animate(
            [
              { transform: `translate(${dx}px, ${dy}px)` },
              { transform: 'translate(0, 0)' },
            ],
            { duration: 560, easing }
          );
        }
      } else {
        el.animate(
          [
            { opacity: 0, transform: 'translateY(24px) scale(0.94)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' },
          ],
          { duration: 480, easing }
        );
      }
    });

    firstPositions.current = null;
  }, [activeCategory]);

  // ---- Pointer-driven 3D tilt on each card ----
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * 9;
    const rotateY = (px - 0.5) * 11;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-10px) scale(1.03)`;
    card.style.setProperty('--tilt-x', `${(px * 100).toFixed(1)}%`);
    card.style.setProperty('--tilt-y', `${(py * 100).toFixed(1)}%`);
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section 
      id="projects" 
      className={`section projects animated-section ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
      ref={ref}
    >
      <h2>{headingText}<span>Projects</span></h2>
      <p>Selected work across AI agents, full-stack apps, data analytics, civic tech, and workflow automation</p>

      <div className="project-filters">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid" ref={gridRef}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.slug}
            data-key={project.slug}
            className={`project-card ${project.featured ? 'is-featured' : ''}`}
            style={{ animationDelay: `${index * 0.08}s` }}
            onMouseMove={handleTilt}
            onMouseLeave={handleTiltLeave}
          >
            {project.featured && (
              <span className="featured-badge"><i className="fas fa-star"></i> Featured</span>
            )}
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1rem 0 1.2rem' }}>
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '999px',
                    background: 'rgba(99,102,241,0.12)',
                    color: 'var(--accent-color)',
                    fontWeight: '600',
                    border: '1px solid rgba(99,102,241,0.25)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              <button
                type="button"
                className="project-link project-details-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenProject(project);
                }}
              >
                <i className="fas fa-circle-info"></i> Details <i className="fas fa-arrow-right"></i>
              </button>
              {project.links ? (
                project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                    style={link.primary ? {
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      borderColor: 'transparent',
                      color: '#fff',
                    } : undefined}
                  >
                    <i className={link.icon}></i> {link.label} <i className="fas fa-arrow-right"></i>
                  </a>
                ))
              ) : (
                <>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: project.demoLabel === 'Live Demo'
                        ? 'linear-gradient(135deg, #10b981, #059669)'
                        : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      borderColor: 'transparent',
                      color: '#fff',
                    }}
                  >
                    <i className={project.demoIcon}></i> {project.demoLabel} <i className="fas fa-arrow-right"></i>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github"></i> GitHub <i className="fas fa-arrow-right"></i>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <ProjectDrawer project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
};

export default Projects;
