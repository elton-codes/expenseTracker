
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import ProtectedLayout from './components/ProtectedLayout';
import Categories from './components/Categories';
import Budgets from './components/Budgets';


function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <LandingPage />,
      
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "expenses",
          element: <Expenses />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "budgets",
          element: <Budgets />
        }
      ]
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
