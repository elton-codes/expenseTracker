import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext.jsx';
import { BudgetsContext } from '../context/BudgetsContext.jsx';

const Categories = () => {
  const { categories, addCategory } = useContext(CategoriesContext);
  const { budgets } = useContext(BudgetsContext);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() === '') return;

    addCategory(newCategory.trim());
    setNewCategory('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Categories & Budgets</h2>
      <div className="mb-4">
        {categories.map((category, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg mb-2 shadow-md">
            <div className="flex justify-between">
              <span className="font-semibold">{category}</span>
              <span className="text-blue-600">
                Budget: GHC {budgets[category]?.toFixed(2) || 0.00}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleAddCategory} className="mt-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="p-2 border rounded-md shadow-sm focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default Categories;
