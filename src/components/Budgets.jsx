import { useState } from 'react';

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({
    category: '',
    amount: '',
  });

  const handleAddBudget = () => {
    if (newBudget.category.trim() !== '' && newBudget.amount.trim() !== '') {
      setBudgets([...budgets, { ...newBudget, id: Date.now() }]);
      setNewBudget({ category: '', amount: '' });
    }
  };

  const handleDeleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Budgets</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newBudget.category}
          onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })}
          placeholder="Category"
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          value={newBudget.amount}
          onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })}
          placeholder="Amount"
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddBudget}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id} className="flex justify-between items-center">
            <span>{budget.category} - ${budget.amount}</span>
            <button
              onClick={() => handleDeleteBudget(budget.id)}
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

export default Budgets;
