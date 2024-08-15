import React, { useState, useEffect } from 'react';

const Budgets = () => {
  // Load budgets from localStorage or initialize with an empty array
  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem('budgets');
    return savedBudgets ? JSON.parse(savedBudgets) : [];
  });

  // Load categories from localStorage to associate budgets with categories
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Miscellaneous'];
  });

  const [newCategory, setNewCategory] = useState('');
  const [newBudgetAmount, setNewBudgetAmount] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Save budgets to localStorage whenever budgets state changes
  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  // Handle form submission for adding/editing a budget
  const handleAddBudget = (e) => {
    e.preventDefault();

    if (editMode) {
      // Edit existing budget
      const updatedBudgets = budgets.map((budget, index) => 
        index === editIndex ? { category: newCategory, amount: parseFloat(newBudgetAmount) } : budget
      );
      setBudgets(updatedBudgets);
      setEditMode(false);
      setEditIndex(null);
    } else {
      // Add new budget
      const newBudget = {
        category: newCategory,
        amount: parseFloat(newBudgetAmount),
      };
      setBudgets([...budgets, newBudget]);
    }

    // Clear form fields
    setNewCategory('');
    setNewBudgetAmount('');
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNewCategory(budgets[index].category);
    setNewBudgetAmount(budgets[index].amount);
  };

  // Handle delete button click
  const handleDeleteClick = (index) => {
    const updatedBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(updatedBudgets);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Budgets</h2>

      {/* Form for adding/editing budgets */}
      <form className="mb-4" onSubmit={handleAddBudget}>
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
          required
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Budget Amount"
          value={newBudgetAmount}
          onChange={(e) => setNewBudgetAmount(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editMode ? 'Update Budget' : 'Add Budget'}
        </button>
      </form>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Budgets</h3>
        {budgets.map((budget, index) => (
          <div key={index} className="p-2 bg-gray-100 rounded mb-2 flex justify-between items-center">
            <span>
              {budget.category}: GHC {budget.amount.toFixed(2)}
            </span>
            <div>
              <button 
                onClick={() => handleEditClick(index)} 
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDeleteClick(index)} 
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budgets;
