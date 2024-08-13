import React from "react";
import Expenses from "./Expenses";
import Analytics from "./Analytics";

const Dashboard = () => {
  const [expenses, setExpenses] = React.useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  return (
    <div>
      <Expenses expenses={expenses} setExpenses={setExpenses} />
      <Analytics expenses={expenses} />
    </div>
  );
};

export default Dashboard;
