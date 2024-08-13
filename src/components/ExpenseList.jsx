const ExpenseList = ({ expenses }) => {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Expenses</h3>
        <ul className="space-y-4">
          {expenses.map((expense, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                  <p className="text-lg font-semibold">{expense.category}</p>
                  <p>{expense.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{expense.amount}</p>
                  {expense.receipt && (
                    <a
                      href={URL.createObjectURL(expense.receipt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View Receipt
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;
  