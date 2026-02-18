import { useEffect, useRef, useState } from 'react'
import { aboutData } from '@/data/about'

export default function About() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    aboutData.sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(section.id))
          }
        },
        { threshold: 0.2 }
      )

      const element = sectionRefs.current.get(section.id)
      if (element) {
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section style={{ padding: '2rem', maxWidth: 960, margin: '0 auto', color: '#e5e7eb' }}>
      <h1 style={{ marginBottom: '3rem', fontSize: '1.75rem', color: '#fafafa' }}>자기소개</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* 프로필 이미지 섹션 */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          {aboutData.photo ? (
            <img
              src={aboutData.photo}
              alt={aboutData.name}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #3f3f46',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
          ) : (
            <div
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: '#27272a',
                border: '3px solid #3f3f46',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: '#60a5fa',
                fontWeight: 600,
              }}
            >
              {aboutData.name.charAt(0)}
            </div>
          )}
        </div>

        {/* 각 섹션별 카드 */}
        {aboutData.sections.map((section, index) => {
          const isVisible = visibleSections.has(section.id)
          return (
            <div
              key={section.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(section.id, el)
              }}
              style={{
                backgroundColor: '#27272a',
                border: '1px solid #3f3f46',
                borderRadius: 12,
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(96, 165, 250, 0.15)'
                e.currentTarget.style.transform = 'translateX(8px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = isVisible ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              {/* 왼쪽 색상 바 */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: 'linear-gradient(180deg, #60a5fa 0%, #34d399 100%)',
                  borderRadius: '12px 0 0 12px',
                }}
              />

              {/* 배경 장식 */}
              <div
                style={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, rgba(96, 165, 250, ${isVisible ? 0.1 : 0}) 0%, transparent 70%)`,
                  borderRadius: '50%',
                  transition: 'background 0.6s ease',
                  pointerEvents: 'none',
                }}
              />

              {/* 제목 */}
              <h2
                style={{
                  fontSize: '1.3rem',
                  color: '#fafafa',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
                    animation: isVisible ? 'pulseDot 2s ease-in-out infinite' : 'none',
                  }}
                />
                {section.title}
              </h2>

              {/* 내용 */}
              <p
                style={{
                  color: '#a1a1aa',
                  lineHeight: 1.8,
                  position: 'relative',
                  zIndex: 1,
                  margin: 0,
                }}
              >
                {section.content}
              </p>
            </div>
          )
        })}
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.4);
            }
            50% {
              box-shadow: 0 0 0 10px rgba(96, 165, 250, 0);
            }
          }
          
          @keyframes pulseDot {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </section>
  )
}
