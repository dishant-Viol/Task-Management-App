'use client';  // Mark this as a client-side component

import React, { useState } from 'react';
import DataTable from '../components/datatables'; // Adjust the path as needed
import Home from '../page'; // Adjust the path as needed

// Define RowData interface
interface RowData {
  name: string;
  role: string;
}

const Users = () => {
  const [data, setData] = useState<RowData[]>([
    { name: 'John Doe', role: 'Admin' },
    {name: 'Jane Smith', role: 'User' },
    {  name: 'Alice Johnson', role: 'Editor' },
    { name: 'Bob Brown', role: 'Admin' },
    { name: 'Charlie Blue', role: 'Viewer' },
  ]);
  
  // Column definitions with proper typing
  const columns: Array<{ Header: string; accessor: keyof RowData }> = [
    { Header: 'Name', accessor: 'name' },
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
