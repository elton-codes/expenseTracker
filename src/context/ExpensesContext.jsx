import React, { createContext, useState } from 'react';

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2024-08-13', category: 'Food', description: 'Groceries', amount: 120.00 },
    { id: 2, date: '2024-08-13', category: 'Transportation', description: 'Gas', amount: 50.00 },
    // Add more dummy expenses here
  ]);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};
