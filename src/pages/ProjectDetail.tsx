import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { projects, copyProjects, etcPorjects } from '@/data/projects'

const allProjects = [...projects, ...copyProjects, ...etcPorjects]

// YouTube URL을 embed 형식으로 변환
function convertToEmbedUrl(url: string): string {
  // 이미 embed 형식이면 그대로 반환
  if (url.includes('/embed/')) {
    return url
  }

  // youtu.be 형식: https://youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (youtuBeMatch) {
    return `https://www.youtube.com/embed/${youtuBeMatch[1]}`
  }

  // youtube.com/watch?v= 형식: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/)
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`
  }

  // 변환 실패 시 원본 반환
  return url
}

// 이미지 경로 변환 함수
// 마크다운에서 사용하는 이미지 경로를 실제 경로로 변환
function transformImageSrc(src: string, projectId?: string): string {
  if (!src) return ''
  
  // @/ 경로 사용 시 (예: @/assets/projects/ifland/image.png)
  // Vite에서는 마크다운 내부에서 직접 import 불가하므로,
  // public 폴더나 동적 import를 사용해야 함
  if (src.startsWith('@/')) {
    // @/assets/... -> /assets/... (public 폴더 기준)
    // 또는 프로젝트별 이미지 폴더 사용
    const pathWithoutAlias = src.replace('@/', '')
    if (projectId) {
      // 프로젝트별 이미지 폴더 사용 시
      return `/assets/projects/${projectId}${pathWithoutAlias.replace('/assets/', '/')}`
    }
    return pathWithoutAlias
  }
  
  // 상대 경로 사용 시 (예: ./images/image.png)
  // 프로젝트별 이미지 폴더를 기준으로 변환
  if (src.startsWith('./')) {
    if (projectId) {
      return `/assets/projects/${projectId}/${src.replace('./', '')}`
    }
  }
  
  // 절대 경로(/로 시작)나 URL(http/https)은 그대로 반환
  return src
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = allProjects.find((p) => p.id === id)

  if (!project) {
    return (
      <section style={{ padding: '2rem', maxWidth: 960, margin: '0 auto', color: '#e5e7eb' }}>
        <p style={{ color: '#a1a1aa' }}>프로젝트를 찾을 수 없습니다.</p>
        <Link to="/projects" style={{ color: '#60a5fa', marginTop: '1rem', display: 'inline-block' }}>
          목록으로
        </Link>
      </section>
    )
  }

  return (
    <section style={{ padding: '2rem', maxWidth: 720, margin: '0 auto', color: '#e5e7eb' }}>
      <Link
        to="/projects"
        style={{
          color: '#60a5fa',
          marginBottom: '1.5rem',
          display: 'inline-block',
          fontSize: '0.9rem',
        }}
      >
        ← 프로젝트 목록
      </Link>
      <h1 style={{ marginBottom: '1rem', fontSize: '1.75rem', color: '#fafafa' }}>
        {project.title}
      </h1>
      {project.videoUrl && (
        <div style={{ marginBottom: '1.5rem' }}>
          <iframe
            width="100%"
            height="400"
            src={convertToEmbedUrl(project.videoUrl)}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 8, border: 'none' }}
          />
        </div>
      )}
      <div
        style={{
          color: '#a1a1aa',
          lineHeight: 1.8,
        }}
      >
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 style={{ color: '#fafafa', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.75rem' }}>
                {children}
              </h1>
            ),
            p: ({ children }) => <p style={{ marginBottom: '1rem' }}>{children}</p>,
            img: ({ src, alt }) => {
              // 이미지 경로 변환
              const imageSrc = transformImageSrc(src || '', project?.id)
              
              return (
                <img
                  src={imageSrc}
                  alt={alt || ''}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    margin: '1rem 0',
                    display: 'block',
                  }}
                  onError={(e) => {
                    // 이미지 로드 실패 시 처리
                    console.error('이미지 로드 실패:', imageSrc)
                  }}
                />
              )
            },
            h2: ({ children }) => (
              <h2 style={{ color: '#fafafa', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 style={{ color: '#fafafa', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                {children}
              </h3>
            ),
            ul: ({ children }) => (
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'decimal' }}>{children}</ol>
            ),
            li: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
            code: ({ children, className }) => {
              const isInline = !className
              return isInline ? (
                <code style={{ backgroundColor: '#1f2937', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9em' }}>
                  {children}
                </code>
              ) : (
                <code className={className} style={{ display: 'block', backgroundColor: '#1f2937', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
                  {children}
                </code>
              )
            },
          }}
        >
          {project.description}
        </ReactMarkdown>
      </div>
    </section>
  )
}
