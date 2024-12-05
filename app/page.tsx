"use client";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
    
      <Sidebar />
     
      <div className="ml-[250px] lg:ml-[300px] w-full">
        <Navbar />
        
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Home;
