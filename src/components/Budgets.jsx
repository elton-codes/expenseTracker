import React, { useState, useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { BudgetsContext } from '../context/BudgetsContext';

const Budgets = () => {
  const { categories } = useContext(CategoriesContext);
  const { budgets, setBudgets } = useContext(BudgetsContext);

  const [newBudgetAmount, setNewBudgetAmount] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editCategory, setEditCategory] = useState('');

  // Handle form submission for adding/editing a budget
  const handleAddBudget = (e) => {
    e.preventDefault();

    // Add or update budget for the selected category
    setBudgets({ ...budgets, [editCategory]: parseFloat(newBudgetAmount) });

    // Clear form fields
    setNewBudgetAmount('');
    setEditMode(false);
    setEditCategory('');
  };

  // Handle edit button click
  const handleEditClick = (category) => {
    setEditMode(true);
    setEditCategory(category);
    setNewBudgetAmount(budgets[category] || '');
  };

  // Handle delete button click
  const handleDeleteClick = (category) => {
    const updatedBudgets = { ...budgets };
    delete updatedBudgets[category];
    setBudgets(updatedBudgets);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Budgets</h2>

      {/* Form for adding/editing budgets */}
      <form className="mb-4" onSubmit={handleAddBudget}>
        <select
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
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
        {Object.entries(budgets).map(([category, amount]) => (
          <div key={category} className="p-2 bg-gray-100 rounded mb-2 flex justify-between items-center">
            <span>
              {category}: GHC {(parseFloat(amount) || 0).toFixed(2)}
            </span>
            <div>
              <button 
                onClick={() => handleEditClick(category)} 
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDeleteClick(category)} 
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
