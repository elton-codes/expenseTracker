import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Overview from './Overview';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const editExpense = (expense) => {
    setExpenses(
      expenses.map((exp) => (exp.id === expense.id ? expense : exp))
    );
    setEditingExpense(null);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const handleSave = (expense) => {
    if (editingExpense) {
      editExpense({ ...editingExpense, ...expense });
    } else {
      addExpense(expense);
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  return (
    <div className="p-6">
      <Overview />

      <ExpenseForm onSave={handleSave} expense={editingExpense} />

      <h2 className="text-2xl font-semibold mb-4">Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="mb-2">
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
              <span>{expense.date} - {expense.category} - GHC {expense.amount}</span>
              <div>
                <button
                  onClick={() => handleEdit(expense)}
                  className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
