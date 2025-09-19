import React, { useState, useEffect } from 'react';

// Load saved profile from localStorage or use default
const defaultProfile = {
  name: 'Amani Njeri',
  age: 4,
  health: 'Healthy',
  milestones: 'Can count to 10, speaks basic Swahili',
};

export default function ChildProfile() {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const saved = localStorage.getItem('childProfile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...profile, [field]: value };
    setProfile(updated);
    localStorage.setItem('childProfile', JSON.stringify(updated));
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Child Profile</h2>

      {/* Editable Fields */}
      <label>
        Name:
        <input
          type="text"
          value={profile.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          value={profile.age}
          onChange={(e) => handleChange('age', e.target.value)}
        />
      </label>
      <br />

      <label>
        Health Status:
        <input
          type="text"
          value={profile.health}
          onChange={(e) => handleChange('health', e.target.value)}
        />
      </label>
      <br />

      <label>
        Development Milestones:
        <textarea
          value={profile.milestones}
          onChange={(e) => handleChange('milestones', e.target.value)}
        />
      </label>
    </main>
  );
}
