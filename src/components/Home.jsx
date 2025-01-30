import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/update-alert');
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Disaster Alert System</h1>
        <button className="add-button" onClick={handleAddClick}>
          Add Alert
        </button>
      </header>
      {/* Rest of your home page content */}
    </div>
  );
};

export default Home; 