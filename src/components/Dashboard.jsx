import { Link } from 'react-router-dom';
import DashboardOverview from './DashboardOverview';
import Overview from './Overview';

const Dashboard = () => {
  return (
    <div className="p-6"> 
      <Overview />
    </div>
  )
}

export default Dashboard