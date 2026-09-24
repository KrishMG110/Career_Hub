import { NavLink } from 'react-router-dom'

const AdminNav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-700 bg-blue-600 text-white shadow-sm">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <NavLink to="/admin" className="text-lg font-bold">CareerHub Admin</NavLink>
          <div className="flex gap-3 text-sm font-medium sm:gap-5">
            <NavLink className="hover:text-blue-100" to={"/user-detail"}>Users</NavLink>
            <NavLink className="hover:text-blue-100" to={"/user-posts"}>Posts</NavLink>
          </div>
      </nav>
    </header>
  )
}

export default AdminNav
