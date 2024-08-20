import { NavLink, useNavigate } from "react-router-dom";
import { Home, BarChart, Folder, Bell, ClipboardList, Cog, LogOut } from "lucide-react";
import { moneyImg } from "../assets";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <aside className="bg-[#1F1572] text-white font-bold w-64 min-h-screen p-4 pt-6 fixed"> {/* Changed the background color and made it static */}
      <h1 className="text-white text-2xl pb-16">MoneyMap</h1>
      
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
          to="/budgets"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md mt-4"
          }
        >
          <ClipboardList className="w-5 h-5 mr-2" />
          Budgets
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "bg-blue-500 flex items-center p-2 rounded-md" : "flex items-center p-2 rounded-md mt-4"
          }
        >
          <Cog className="w-5 h-5 mr-2" />
          Settings
        </NavLink>
      </nav>
      <div className="mt-16">
        <button
          onClick={logout}
          className="flex items-center p-2 rounded-md bg-red-500 w-full"
        >
          <LogOut className="w-5 h-5 mr-2"/>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
