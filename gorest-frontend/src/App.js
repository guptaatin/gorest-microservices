import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './UsersList';
import ParticularUser from './ParticularUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:userId" element={<ParticularUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
