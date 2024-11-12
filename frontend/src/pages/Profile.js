// src/pages/Profile.js

import React, { useState, useEffect } from 'react';

// Profile Component - Displays and updates user profile information
const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data (mocked for now)
    const fetchProfile = async () => {
      const response = await fetch('/api/user/profile');
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    // Update profile logic (mocked for now)
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile">
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
