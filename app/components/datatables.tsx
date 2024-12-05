'use client';  // Mark this as a client-side component

import React, { useState } from 'react';

interface RowData {
  name: string;
  role: string;
}

interface DataTableProps {
  data: RowData[];
  columns: Array<{ Header: string; accessor: keyof RowData }>;
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, setData }) => {
  const [newRow, setNewRow] = useState<RowData>({ name: '', role: '' });  // State for new row data
  const [isEditable, setIsEditable] = useState<boolean>(false);  // Flag to manage editability

  // Handle changes in the input fields for the new row
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, column: keyof RowData) => {
    setNewRow(prevRow => ({ ...prevRow, [column]: e.target.value }));
  };

  // Handle Add Row button click
  const handleAddClick = () => {
    setNewRow({ name: '', role: '' });  // Reset the new row data
    setIsEditable(true);  // Enable editing for the new row
  };

  // Handle OK button click
  const handleOkClick = () => {
    if (newRow.name && newRow.role) {
      setData([newRow, ...data]);  // Add the new row at the top
    }
    setIsEditable(false);  // Lock the new row for editing
  };

  return (
    <div className="overflow-x-auto">

       {/* Add and OK buttons */}
       <div className="mt-6 mb-4 mr-4">
        <button
          onClick={handleAddClick}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          + Add Row
        </button>
        <button
          onClick={handleOkClick}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          OK
        </button>
      </div>


      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="py-3 px-4 border-b text-left text-sm font-semibold">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* Editable row */}
          {isEditable && (
            <tr className="bg-yellow-100">
              {columns.map((column) => (
                <td key={column.accessor} className="py-3 px-4 border-b">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={newRow[column.accessor] || ''}
                    onChange={(e) => handleChange(e, column.accessor)}
                  />
                </td>
              ))}
            </tr>
          )}

          {/* Data rows */}
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 transition-colors duration-200">
              {columns.map((column) => (
                <td key={column.accessor} className="py-3 px-4 border-b">
                  <span>{row[column.accessor]}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default DataTable;
