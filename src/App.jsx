import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/auth/Login';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import ProtectedLayout from './components/ProtectedLayout';
import Categories from './components/Categories';
import Budgets from './components/Budgets';
import Settings from './components/Settings';
import { ExpensesProvider } from './context/ExpensesContext';
import { CategoriesProvider } from './context/CategoriesContext';
import { BudgetsProvider } from './context/BudgetsContext'; // Import BudgetsProvider

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
      element: (
        <ExpensesProvider>
          <CategoriesProvider>
            <BudgetsProvider> {/* Wrap everything with BudgetsProvider */}
              <ProtectedLayout />
            </BudgetsProvider>
          </CategoriesProvider>
        </ExpensesProvider>
      ),
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
          element: <Budgets />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
