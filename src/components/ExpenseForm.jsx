import { useState } from 'react';

const ExpenseForm = ({ onSave, expense }) => {
  const [date, setDate] = useState(expense ? expense.date : '');
  const [amount, setAmount] = useState(expense ? expense.amount : '');
  const [category, setCategory] = useState(expense ? expense.category : '');
  const [notes, setNotes] = useState(expense ? expense.notes : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ date, amount, category, notes });
    setDate('');
    setAmount('');
    setCategory('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{expense ? 'Edit Expense' : 'Add Expense'}</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        {expense ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;
