import React, { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext.jsx";

const Expenses = () => {
  const { categories } = useContext(CategoriesContext); // Access shared categories state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });

  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const addNotification = (message) => {
    const newNotification = { message };
    const updatedNotifications = [...notifications, newNotification];
    setNotifications(updatedNotifications);
  };

  // Load expenses from localStorage or initialize with default values
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [
          {
            id: 1,
            date: "2024-08-13",
            category: "Food",
            description: "food",
            amount: 100,
          },
          {
            id: 2,
            date: "2024-08-13",
            category: "Entertainment",
            description: "phone",
            amount: 200,
          },
          // Add more initial expenses here if needed
        ];
  });

  // Example budget data (you may load this from state or props)
  const budgets = {
    Food: 500,
    Entertainment: 300,
    // Add more categories and their budgets
  };

  // State for new expense inputs
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDate, setNewDate] = useState("");

  // State for editing an expense
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Filter expenses based on the selected category
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  // Calculate total expenses
  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Save expenses to localStorage whenever expenses state changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Save notifications to localStorage whenever notifications state changes
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Handle form submission
  const handleAddExpense = (e) => {
    e.preventDefault();

    if (editMode) {
      // Edit existing expense
      const updatedExpenses = expenses.map((expense) =>
        expense.id === editId
          ? {
              ...expense,
              date: newDate,
              category: newCategory,
              description: newDescription,
              amount: parseFloat(newAmount),
            }
          : expense
      );
      setExpenses(updatedExpenses);
      setEditMode(false);
      setEditId(null);
    } else {
      // Add new expense
      const newExpense = {
        id: expenses.length + 1, // Simple ID generation
        date: newDate,
        category: newCategory,
        description: newDescription,
        amount: parseFloat(newAmount),
      };
      setExpenses([...expenses, newExpense]);

      // Example usage: Check if the new expense exceeds the budget
      if (budgets[newCategory] && parseFloat(newAmount) > budgets[newCategory]) {
        addNotification(`Expense for ${newCategory} exceeds budget!`);
      }
    }

    // Clear form fields
    setNewAmount("");
    setNewDescription("");
    setNewCategory("");
    setNewDate("");

    // Hide form after submission
    setShowForm(false);
  };

  // Handle edit button click
  const handleEditClick = (expense) => {
    setEditMode(true);
    setEditId(expense.id);
    setNewAmount(expense.amount);
    setNewDescription(expense.description);
    setNewCategory(expense.category);
    setNewDate(expense.date);
    setShowForm(true); // Show form when editing
  };

  // Handle delete button click
  const handleDeleteClick = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <h2 className="text-xl font-bold">Manage Expenses</h2>

        {/* Notifications Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-2 bg-yellow-100 text-yellow-800 rounded mb-2"
            >
              {notification.message}
            </div>
          ))}
        </div>

        {/* Button to toggle form visibility */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-4 bg-green-500 text-white py-2 px-4 rounded"
        >
          {showForm ? "Hide Form" : "Add New Expense"}
        </button>

        {/* Form for adding/editing expenses */}
        {showForm && (
          <form className="mb-4" onSubmit={handleAddExpense}>
            <input
              type="number"
              placeholder="Amount"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
              required
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
              required
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {editMode ? "Update Expense" : "Add Expense"}
            </button>
          </form>
        )}

        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Total Expenses: GHC {totalExpenses.toFixed(2)}
          </h3>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Expenses</h3>
          {filteredExpenses.map((expense) => (
            <div
              key={expense.id}
              className="p-2 bg-gray-100 rounded mb-2 flex justify-between items-center"
            >
              <div>
                <span>{expense.date} </span>
                <span>{expense.category} </span>
                <span>{expense.description} </span>
                <span>{expense.amount}</span>
              </div>
              <div>
                <button
                  onClick={() => handleEditClick(expense)}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(expense.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar with Categories */}
      <div className="w-64 bg-gray-200 p-4 rounded ml-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        <ul>
          {["All", ...categories].map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left py-2 px-4 rounded ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expenses;
