import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { copyProjects } from '@/data/projects'
import { etcPorjects } from '@/data/projects'

export default function Projects() {
  return (
    <section style={{ padding: '2rem', maxWidth: 960, margin: '0 auto', color: '#e5e7eb' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', color: '#fafafa' }}>프로젝트</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <article
              style={{
                borderRadius: 8,
                overflow: 'hidden',
                backgroundColor: '#27272a',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '1.1rem', color: '#fafafa', marginBottom: '0.5rem' }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.5 }}>
                  {project.shortDescription}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <h1 style={{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.75rem', color: '#fafafa' }}>모작 프로젝트</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {copyProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <article
              style={{
                borderRadius: 8,
                overflow: 'hidden',
                backgroundColor: '#27272a',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '1.1rem', color: '#fafafa', marginBottom: '0.5rem' }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.5 }}>
                  {project.shortDescription}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <h1 style={{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.75rem', color: '#fafafa' }}>기타</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {etcPorjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <article
              style={{
                borderRadius: 8,
                overflow: 'hidden',
                backgroundColor: '#27272a',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '1.1rem', color: '#fafafa', marginBottom: '0.5rem' }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.5 }}>
                  {project.shortDescription}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
