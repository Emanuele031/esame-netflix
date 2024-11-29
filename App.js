
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './Component/Navbar';
import Account from './Component/Account';

const App = () => {
  return (
    <div className="bg-black min-vh-100 d-flex flex-column justify-content-center align-items-center">
      
      <Navbar />

     
      <main className="container text-center">
        <div className="d-flex justify-content-center align-items-center w-100">
          <Account />
        </div>
      </main>
    </div>
  );
};

export default App;
