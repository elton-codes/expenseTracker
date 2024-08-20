import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const BudgetsContext = createContext();

// Create a provider component
export const BudgetsProvider = ({ children }) => {
  // Load budgets from localStorage or initialize with default values
  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem('budgets');
    return savedBudgets
      ? JSON.parse(savedBudgets)
      : {
          Food: 500,
          Transportation: 300,
          Utilities: 400,
          Entertainment: 200,
          Miscellaneous: 100,
        };
  });

  // Save budgets to localStorage whenever budgets state changes
  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  return (
    <BudgetsContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetsContext.Provider>
  );
};
