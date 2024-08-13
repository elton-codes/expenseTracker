import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import RightSidebar from './RightSidebar';  // Import RightSidebar

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mr-72"> {/* Adjusted to make space for RightSidebar */}
        <Topbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <RightSidebar /> {/* Added RightSidebar */}
    </div>
  )
}

export default ProtectedLayout;
