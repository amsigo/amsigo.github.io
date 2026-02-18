import { experiences } from '@/data/experience'
import { awards } from '@/data/experience/awards'
import { skills } from '@/data/experience/skills'

export default function Experience() {
  const formatPeriod = (startDate: string, endDate?: string) => {
    return endDate ? `${startDate} ~ ${endDate}` : `${startDate} ~ 재직중`
  }

  const TableRow = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      {children}
    </div>
  )

  const TableRow3 = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      {children}
    </div>
  )

  const TableRow4 = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1.5fr 2fr',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      {children}
    </div>
  )

  const TableCell = ({
    children,
    isLast = false,
    center = false,
  }: {
    children: React.ReactNode
    isLast?: boolean
    center?: boolean
  }) => (
    <div
      style={{
        padding: '1rem',
        color: '#e5e7eb',
        borderRight: isLast ? 'none' : '1px solid #3f3f46',
        backgroundColor: '#1c1c1f',
        whiteSpace: 'pre-line',
        ...(center && { display: 'flex', alignItems: 'center', justifyContent: 'center' }),
      }}
    >
      {children}
    </div>
  )

  const TableHeader = ({ left, right }: { left: string; right: string }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: '#3f3f46',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          borderRight: '1px solid #3f3f46',
        }}
      >
        {left}
      </div>
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
        }}
      >
        {right}
      </div>
    </div>
  )

  const TableHeader3 = ({
    col1,
    col2,
    col3,
  }: {
    col1: string
    col2: string
    col3: string
  }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr',
        backgroundColor: '#3f3f46',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          borderRight: '1px solid #3f3f46',
          textAlign: 'center',
        }}
      >
        {col1}
      </div>
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          borderRight: '1px solid #3f3f46',
          textAlign: 'center',
        }}
      >
        {col2}
      </div>
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          textAlign: 'center',
        }}
      >
        {col3}
      </div>
    </div>
  )

  const TableHeader4 = ({
    col1,
    col2,
    col3,
    col4,
  }: {
    col1: string
    col2: string
    col3: string
    col4: string
  }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1.5fr 2fr',
        backgroundColor: '#3f3f46',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          borderRight: '1px solid #3f3f46',
        }}
      >
        {col1}
      </div>
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          borderRight: '1px solid #3f3f46',
        }}
      >
        {col2}
      </div>
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
          borderRight: '1px solid #3f3f46',
        }}
      >
        {col3}
      </div>
      <div
        style={{
          padding: '1rem',
          fontWeight: 600,
          color: '#fafafa',
        }}
      >
        {col4}
      </div>
    </div>
  )

  return (
    <section style={{ padding: '2rem', maxWidth: 960, margin: '0 auto', color: '#e5e7eb' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.75rem', color: '#fafafa' }}>경력</h1>

      <div
        style={{
          border: '1px solid #3f3f46',
          borderRadius: 8,
          overflow: 'hidden',
          backgroundColor: '#27272a',
          marginBottom: '3rem',
        }}
      >
        <TableHeader3 col1="근무기간" col2="소속회사" col3="담당업무" />

        {experiences.map((exp) => (
          <TableRow3 key={exp.id}>
            <TableCell center>{formatPeriod(exp.startDate, exp.endDate)}</TableCell>
            <TableCell center>{exp.company}</TableCell>
            <TableCell isLast>{exp.duty || '-'}</TableCell>
          </TableRow3>
        ))}
      </div>

      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: '#fafafa' }}>기술 스택</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        {skills.map((skill) => {
          const getLevelColor = (level: string) => {
            switch (level) {
              case '상':
                return '#60a5fa' // 파란색
              case '중':
                return '#34d399' // 초록색
              case '하':
                return '#fbbf24' // 노란색
              default:
                return '#a1a1aa'
            }
          }

          return (
            <div
              key={skill.id}
              style={{
                backgroundColor: '#27272a',
                border: '1px solid #3f3f46',
                borderRadius: 8,
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ color: '#fafafa', fontWeight: 500 }}>{skill.name}</span>
              <span
                style={{
                  color: getLevelColor(skill.level),
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.75rem',
                  backgroundColor: `${getLevelColor(skill.level)}20`,
                  borderRadius: 4,
                }}
              >
                {skill.level}
              </span>
            </div>
          )
        })}
      </div>

      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: '#fafafa' }}>수상경력</h2>

      <div
        style={{
          border: '1px solid #3f3f46',
          borderRadius: 8,
          overflow: 'hidden',
          backgroundColor: '#27272a',
        }}
      >
        <TableHeader3 col1="수상일" col2="수상명" col3="수상내용" />

        {awards.map((award) => (
          <TableRow3 key={award.id}>
            <TableCell center>{award.date}</TableCell>
            <TableCell center>{award.title} ({award.organization})</TableCell>
            <TableCell center isLast>
              {award.content}
            </TableCell>
          </TableRow3>
        ))}
      </div>
    </section>
  )
}
