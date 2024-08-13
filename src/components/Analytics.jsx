import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Analytics = ({ expenses }) => {
  // Group expenses by category and sum the amounts
  const categoryData = expenses.reduce((acc, expense) => {
    const category = acc.find(cat => cat.name === expense.category);
    if (category) {
      category.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  // Define colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28AFA'];

  return (
    <div className="analytics-container">
      <h2 className="text-xl font-bold mb-4">Expense Analytics</h2>
      
      <div className="chart-section mb-8">
        <h3 className="text-lg font-semibold mb-2">Expenses by Category</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={categoryData}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="chart-section">
        <h3 className="text-lg font-semibold mb-2">Expenses by Date</h3>
        <BarChart width={600} height={300} data={expenses}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
