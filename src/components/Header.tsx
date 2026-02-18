import { NavLink, Link } from 'react-router-dom'

const menuItems = [
  { path: '/', label: '자기소개' },
  { path: '/experience', label: '경력' },
  { path: '/projects', label: '프로젝트' },
  { path: '/activities', label: '대외활동' },
  { path: 'https://velog.io/@amsigo', label: '블로그', isExternal: true },
  { path: 'https://github.com/amsigo', label: '깃허브', isExternal: true },
]

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: '#1c1c1f',
        borderBottom: '1px solid #3f3f46',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#fafafa',
          textDecoration: 'none',
        }}
      >
        프로그래머 이상준
      </Link>
      <nav
        style={{
          display: 'flex',
          gap: '2rem',
        }}
      >
        {menuItems.map(({ path, label, isExternal }) =>
          isExternal ? (
            <a
              key={path}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 400,
                color: '#a1a1aa',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ) : (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              style={({ isActive }) => ({
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#60a5fa' : '#a1a1aa',
              })}
            >
              {label}
            </NavLink>
          )
        )}
      </nav>
    </header>
  )
}