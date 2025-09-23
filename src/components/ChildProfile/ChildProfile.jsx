import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../UI/Card';

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
    <>
      <Navbar role="parent" />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Child Profile</h2>

        <Card>
          <label>
            Name:
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={profile.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </label>
          <label>
            Health Status:
            <input
              type="text"
              value={profile.health}
              onChange={(e) => handleChange('health', e.target.value)}
            />
          </label>
          <label>
            Development Milestones:
            <textarea
              value={profile.milestones}
              onChange={(e) => handleChange('milestones', e.target.value)}
            />
          </label>
        </Card>
      </main>
    </>
  );
}
