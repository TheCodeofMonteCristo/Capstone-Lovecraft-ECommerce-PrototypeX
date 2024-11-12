// src/pages/AdminDashboard.js

import React, { useState, useEffect } from 'react';

// AdminDashboard Component - Displays management options for cities and users
const AdminDashboard = () => {
  const [cities, setCities] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch cities and users for admin view
    const fetchAdminData = async () => {
      const citiesResponse = await fetch('/api/admin/cities');
      const usersResponse = await fetch('/api/admin/users');
      const citiesData = await citiesResponse.json();
      const usersData = await usersResponse.json();
      setCities(citiesData);
      setUsers(usersData);
    };

    fetchAdminData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <h2>Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
