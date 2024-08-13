import { NavLink } from "react-router-dom";
import { Home, BarChart, Folder, Bell, ClipboardList, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-[#1F1572] text-white w-64 min-h-screen p-4 pt-40">
      <nav>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md"
          }
        >
          <Home className="w-5 h-5 mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md mt-4"
          }
        >
          <BarChart className="w-5 h-5 mr-2" />
          Expenses
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md mt-4"
          }
        >
          <Folder className="w-5 h-5 mr-2" />
          Categories
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md mt-4"
          }
        >
          <Bell className="w-5 h-5 mr-2" />
          Notifications
        </NavLink>
        <NavLink
          to="/budgets"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md mt-4"
          }
        >
          <ClipboardList className="w-5 h-5 mr-2" />
          Budgets
        </NavLink>
      </nav>
      <div className="mt-16">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive ? "bg-red-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md"
          }
        >
          <LogOut className="w-5 h-5 mr-2"/>
          Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
