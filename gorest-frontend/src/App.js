import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './UsersList';
import ParticularUser from './ParticularUser';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:9001/users-micro/users-list")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
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
