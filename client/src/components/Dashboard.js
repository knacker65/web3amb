import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const [user, setUser] = useState(null);

useEffect(() => {
  axios.get(`http://localhost:5000/users/${userId}`)
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          {/* Render the list of applications here */}
          <p>Your applications will be displayed here...</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Messages</h2>
          {/* Render the list of messages here */}
          <p>Your messages will be displayed here...</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Other Items</h2>
          {/* Render other necessary items here */}
          <p>Other items will be displayed here...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
