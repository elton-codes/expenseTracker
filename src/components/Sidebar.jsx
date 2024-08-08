import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-sm mt-20">Menu</h2>
        <ul className='text-xl font-bold'>
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link to="/expenses" className="block py-2 px-4 hover:bg-gray-700">Expenses</Link>
          </li>
          {/* I will add more here */}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar