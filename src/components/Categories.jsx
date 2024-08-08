import { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load categories from local storage when the component mounts
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  useEffect(() => {
    // Save categories to local storage whenever they change
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddCategory}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center">
            {category}
            <button
              onClick={() => handleDeleteCategory(category)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
