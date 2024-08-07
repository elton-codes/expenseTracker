import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BarChart, AlertCircle } from 'lucide-react'; // Importing icons from lucide-react

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Smart Expense Tracker</h1>
          <div>
            <Link to="/login" className="text-gray-800 hover:text-blue-600 mx-2">Login</Link>
            <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center text-gray-800 mt-16">
          Take Control of Your Finances
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-xl">
          The Smart Expense Tracker helps you manage your finances by tracking your expenses, categorizing them, and setting budgets.
        </p>
        <Link to="/register" className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </Link>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText size={40} className="text-blue-500" />}
            title="Track Expenses"
            description="Easily add and categorize your expenses to keep track of where your money goes."
          />
          <FeatureCard
            icon={<BarChart size={40} className="text-blue-500" />}
            title="Visualize Spending"
            description="Use our intuitive charts and graphs to understand your spending habits."
          />
          <FeatureCard
            icon={<AlertCircle size={40} className="text-blue-500" />}
            title="Budget Alerts"
            description="Set budgets and get alerts when you are nearing or exceeding your limits."
          />
        </div>
      </main>
      
      <footer className="w-full bg-white shadow mt-16">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-800">© 2024 Smart Expense Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
