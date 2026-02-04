import React, { useState } from 'react';
import './NameEntry.css';

const NameEntry = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        onNameSubmit(name.trim());
      }, 500);
    }
  };

  return (
    <div className="name-entry-container">
      <div className="backdrop"></div>
      <div className="name-entry-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Please enter your name to continue</p>
        <form onSubmit={handleSubmit} className="name-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            className="name-input"
            autoFocus
          />
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={!name.trim() || isSubmitting}
          >
            {isSubmitting ? 'Welcome!' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameEntry;