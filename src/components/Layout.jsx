import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4">
          <h2 className="text-xl font-bold">Smart Expense Tracker</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li>
              <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link>
            </li>
            <li>
              <Link to="/expenses" className="block py-2 px-4 hover:bg-gray-700 rounded">Expenses</Link>
            </li>
            <li>
              <Link to="/budget" className="block py-2 px-4 hover:bg-gray-700 rounded">Budget</Link>
            </li>
            <li>
              <Link to="/reports" className="block py-2 px-4 hover:bg-gray-700 rounded">Reports</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div>
            <Link to="/profile" className="text-gray-800 hover:text-blue-600 mx-2">Profile</Link>
            <Link to="/logout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Logout</Link>
          </div>
        </header>
        <main className="flex-1 bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout