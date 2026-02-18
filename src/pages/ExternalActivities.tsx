import { activitySections } from '@/data/activities'

const sectionAccent: Record<string, string> = {
  '멘토링 활동': '#60a5fa',
  '심사위원 활동': '#34d399',
  '운영진 활동': '#f59e0b',
}

export default function ExternalActivities() {
  return (
    <section style={{ padding: '2rem', maxWidth: 720, margin: '0 auto', color: '#e5e7eb' }}>
      <h1 style={{ marginBottom: '0.5rem', fontSize: '1.75rem', color: '#fafafa' }}>
        대외활동
      </h1>
      <p style={{ marginBottom: '2.5rem', fontSize: '0.95rem', color: '#a1a1aa', lineHeight: 1.6 }}>
        커뮤니티 멘토링, 해커톤·행사 심사 및 운영진 활동 이력입니다.
      </p>

      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        {/* vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 5,
            top: 12,
            bottom: 12,
            width: 2,
            backgroundColor: '#3f3f46',
            borderRadius: 1,
          }}
        />

        {activitySections.map((section, sectionIndex) => {
          const accent = sectionAccent[section.title] ?? '#71717a'
          const isLast = sectionIndex === activitySections.length - 1
          return (
            <div
              key={section.title}
              style={{
                position: 'relative',
                marginBottom: isLast ? 0 : '2rem',
              }}
            >
              {/* node on timeline */}
              <div
                style={{
                  position: 'absolute',
                  left: -24,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: accent,
                  border: '3px solid #1c1c1f',
                  boxSizing: 'border-box',
                }}
              />

              <h2
                style={{
                  margin: '0 0 0.75rem 0',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: accent,
                }}
              >
                {section.title}
              </h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.25rem',
                  color: '#d4d4d8',
                  lineHeight: 1.9,
                  listStyleType: 'disc',
                }}
              >
                {section.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
