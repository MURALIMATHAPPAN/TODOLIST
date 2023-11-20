// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import UserCardGrid from './UserCardGrid';
import './App.css';
import './UserCardGrid.js';


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <span className="brand-name">Your Brand</span>
        <button className="get-users-btn" onClick={getUsers} disabled={loading}>
          Get Users
        </button>
      </nav>
      {loading && <div className="loader">Loading...</div>}
      <UserCardGrid users={users} />
    </div>
  );
};

export default App;
