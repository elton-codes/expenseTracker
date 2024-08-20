import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import RightSidebar from './RightSidebar';

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 mr-72 bg-gray-300 min-h-screen"> {/* Apply the background color here */}
        <Topbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <RightSidebar />
    </div>
  );
}

export default ProtectedLayout;
