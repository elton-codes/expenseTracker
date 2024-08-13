import { useState } from 'react';
import { formatCurrency } from "../currencyUtils";

const Overview = () => {
  // State to hold overview data
  const [totalExpenses, setTotalExpenses] = useState(0.00);
  const [remainingBudget, setRemainingBudget] = useState(0.00);
  const [expenses, setExpenses] = useState({
    food: 0.00,
    transportation: 0.00,
  });
  const [budgetVsSpending, setBudgetVsSpending] = useState(0.00);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Expenses */}
        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Total Expenses</h3>
          <p className="text-2xl font-semibold">{formatCurrency(totalExpenses)}</p>
        </div>

        {/* Remaining Budget */}
        <div className="p-4 bg-green-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Remaining Budget</h3>
          <p className="text-2xl font-semibold">{formatCurrency(remainingBudget)}</p>
        </div>

        {/* Expense Breakdown */}
        <div className="p-4 bg-yellow-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Expense Breakdown</h3>
          <ul>
            <li>Food: {formatCurrency(expenses.food)}</li>
            <li>Transportation: {formatCurrency(expenses.transportation)}</li>
            {/* Add more categories as needed */}
          </ul>
        </div>

        {/* Budget vs. Spending */}
        <div className="p-4 bg-red-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Budget vs. Spending</h3>
          <p className="text-2xl font-semibold">{formatCurrency(budgetVsSpending)}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
