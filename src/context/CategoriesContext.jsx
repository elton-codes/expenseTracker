import React, { createContext, useState } from 'react';

// Create the context
export const CategoriesContext = createContext();

// Create a provider component
export const CategoriesProvider = ({ children }) => {
  // Load categories from localStorage or initialize with default values
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Miscellaneous'];
  });

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
