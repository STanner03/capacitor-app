import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App" style={{ margin: "1rem"}}>
      <h1>Shane's App</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
