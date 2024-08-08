import { Link } from 'react-router-dom';
import DashboardOverview from './DashboardOverview';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to your dashboard!</h2>
      <DashboardOverview />
    </div>
  )
}

export default Dashboard