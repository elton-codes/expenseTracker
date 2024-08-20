import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const Analytics = ({ totalExpenses, remainingBudget, budgetSpentPercentage }) => {
  const summaryData = [
    { name: 'Total Expenses', value: totalExpenses },
    { name: 'Remaining Budget', value: remainingBudget },
    { name: 'Budget Spent (%)', value: budgetSpentPercentage },
  ];

  const pieData = [
    { name: 'Spent', value: totalExpenses },
    { name: 'Remaining', value: remainingBudget },
  ];

  const COLORS = ['#c40a00', '#11095D'];

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Spending Trends</h3>

    

      {/* Bar Chart for Expenses by Category */}
      <h3 className="text-2xl font-bold mt-8 mb-6">Expenses by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={summaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#11095D" />
        </BarChart>
      </ResponsiveContainer>

      {/* Pie Chart for Budget vs. Spending */}
      <h3 className="text-2xl font-bold mt-8 mb-6">Budget vs. Spending</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
