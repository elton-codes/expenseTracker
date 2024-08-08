import { formatCurrency } from "../currencyUtils";

const Overview = () => {


  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Expenses */}
        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Total Expenses</h3>
          <p className="text-2xl font-semibold">$0.00</p> 
        </div>

        {/* Remaining Budget */}
        <div className="p-4 bg-green-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Remaining Budget</h3>
          <p className="text-2xl font-semibold">$0.00</p> 
        </div>

        {/* Expense Breakdown */}
        <div className="p-4 bg-yellow-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Expense Breakdown</h3>
          <ul>
            <li>Food: $0.00</li> 
            <li>Transportation: $0.00</li> 
            {/* Add more categories as needed */}
          </ul>
        </div>

        {/* Budget vs. Spending */}
        <div className="p-4 bg-red-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold">Budget vs. Spending</h3>
          <p className="text-2xl font-semibold">$0.00</p> 
        </div>
      </div>
    </div>
  );
}

export default Overview;
