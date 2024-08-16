// Example: Analytics.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = ({ totalExpenses, remainingBudget, budgetSpentPercentage }) => {
  const data = [
    { name: 'Total Expenses', value: totalExpenses },
    { name: 'Remaining Budget', value: remainingBudget },
    { name: 'Budget Spent (%)', value: budgetSpentPercentage },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Spending Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
