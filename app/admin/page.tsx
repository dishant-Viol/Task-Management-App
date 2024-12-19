'use client'; // Mark this as a client-side component

import React, { useState } from 'react';
import DataTable from '../components/datatables'; // Adjust the path as needed
import Home from '../page'; // Adjust the path as needed

// Define RowData interface
interface RowData {
  name: string;
  email: string; // Added email field
  role: string;
}

const Users = () => {
  const [data, setData] = useState<RowData[]>([
    { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Editor' },
    { name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Admin' },
    { name: 'Charlie Blue', email: 'charlie.blue@example.com', role: 'Viewer' },
  ]);

  // Column definitions with proper typing
  const columns: Array<{ Header: string; accessor: keyof RowData }> = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' }, // Added email column
    { Header: 'Role', accessor: 'role' },
  ];

  return (
    <Home>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Data Table Example</h1>
        <DataTable data={data} columns={columns} setData={setData} />
      </div>
    </Home>
  );
};

export default Users;
