
const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Total Expenses</h3>
      <p className="text-2xl mt-2">GHC 1,200</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Total Income</h3>
      <p className="text-2xl mt-2">GHC 2,500</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Budget Remaining</h3>
      <p className="text-2xl mt-2">GHC 800</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Savings</h3>
      <p className="text-2xl mt-2">GHC 500</p>
    </div>
  </div>
  )
}

export default DashboardOverview