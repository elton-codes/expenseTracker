
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import ProtectedLayout from './components/ProtectedLayout';


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
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/expenses",
          element: <Expenses />,
        }
      ]
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
