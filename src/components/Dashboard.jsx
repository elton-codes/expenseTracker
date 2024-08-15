// Dashboard.jsx
import React, { useContext } from "react";
import Analytics from "./Analytics";
import { ExpensesContext } from "../context/ExpensesContext";

const Dashboard = () => {
  const { expenses } = useContext(ExpensesContext);

  // Calculate the total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  // Set a fixed budget (e.g., 5000) for demonstration
  const totalBudget = 5000;

  // Calculate remaining budget and budget spent percentage
  const remainingBudget = totalBudget - totalExpenses;
  const budgetSpentPercentage = (totalExpenses / totalBudget) * 100;

  return (
    <div className="dashboard">
      <Analytics
        totalExpenses={totalExpenses}
        remainingBudget={remainingBudget}
        budgetSpentPercentage={budgetSpentPercentage}
      />
    </div>
  );
};

export default Dashboard;
