import React from 'react'

const Expenses = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Expenses</h2>
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Date</th>
          <th className="py-2">Category</th>
          <th className="py-2">Description</th>
          <th className="py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">2024-08-01</td>
          <td className="border px-4 py-2">Groceries</td>
          <td className="border px-4 py-2">Bought vegetables and fruits</td>
          <td className="border px-4 py-2">$50</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2024-08-02</td>
          <td className="border px-4 py-2">Transport</td>
          <td className="border px-4 py-2">Monthly bus pass</td>
          <td className="border px-4 py-2">$70</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Expenses