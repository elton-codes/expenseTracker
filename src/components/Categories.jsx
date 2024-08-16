import React, { useState, useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext'; // Import the CategoriesContext

const Categories = () => {
  // Access categories and setCategories from the context
  const { categories, setCategories } = useContext(CategoriesContext);

  const [newCategory, setNewCategory] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle form submission for adding/editing a category
  const handleAddCategory = (e) => {
    e.preventDefault();

    if (editMode) {
      // Edit existing category
      const updatedCategories = categories.map((category, index) => 
        index === editIndex ? newCategory : category
      );
      setCategories(updatedCategories);
      setEditMode(false);
      setEditIndex(null);
    } else {
      // Add new category
      setCategories([...categories, newCategory]);
    }

    // Clear form field
    setNewCategory('');
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNewCategory(categories[index]);
  };

  // Handle delete button click
  const handleDeleteClick = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Categories</h2>

      {/* Form for adding/editing categories */}
      <form className="mb-4" onSubmit={handleAddCategory}>
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editMode ? 'Update Category' : 'Add Category'}
        </button>
      </form>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        {categories.map((category, index) => (
          <div key={index} className="p-2 bg-gray-100 rounded mb-2 flex justify-between items-center">
            <span>{category}</span>
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

export default Categories;
