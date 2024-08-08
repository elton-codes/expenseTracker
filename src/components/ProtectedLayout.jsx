import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';



const ProtectedLayout = () => {
  return (
    <div className="flex">
<Sidebar />
    <div className="flex-1">
      <Topbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  </div>
  )
}

export default ProtectedLayout