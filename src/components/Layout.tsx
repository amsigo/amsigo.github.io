import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1f' }}>
        <Outlet />
      </main>
    </>
  )
}
