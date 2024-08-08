import { useState, useEffect } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Load expenses from local storage when the component mounts
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    // Save expenses to local storage whenever they change
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: '',
  });

  const handleAddExpense = () => {
    if (
      newExpense.description.trim() !== '' &&
      newExpense.amount.trim() !== '' &&
      newExpense.category.trim() !== ''
    ) {
      setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
      setNewExpense({ description: '', amount: '', category: '' });
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Expenses</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newExpense.description}
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
          placeholder="Description"
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
          placeholder="Amount"
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
          placeholder="Category"
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddExpense}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between items-center">
            <span>
              {expense.description} - ${expense.amount} ({expense.category})
            </span>
            <button
              onClick={() => handleDeleteExpense(expense.id)}
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

export default Expenses;
