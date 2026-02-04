import React, { useState } from 'react';
import { useVisitorTracking } from '../hooks/useVisitorTracking';
import './NameEntry.css';

const NameEntry = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const { trackVisitor, isTracking, error, clearError } = useVisitorTracking();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      return;
    }

    // Clear any previous errors
    clearError();

    // Track visitor in database
    const trackingSuccess = await trackVisitor(name.trim());
    
    if (trackingSuccess) {
      // Simulate a brief loading state for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      onNameSubmit(name.trim());
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    if (error) {
      clearError();
    }
  };

  return (
    <div className="name-entry-container">
      <div className="backdrop"></div>
      <div className="name-entry-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Please enter your name to continue</p>
        
        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="name-form">
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Your name..."
            className="name-input"
            autoFocus
            maxLength={100}
            disabled={isTracking}
            aria-label="Enter your name"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'name-error' : undefined}
          />
          <button 
            type="submit" 
            className={`submit-button ${isTracking ? 'submitting' : ''}`}
            disabled={!name.trim() || isTracking}
            aria-label={isTracking ? 'Processing...' : 'Continue to portfolio'}
          >
            {isTracking ? 'Processing...' : 'Continue'}
          </button>
        </form>
        
        <div className="name-entry-footer">
          <small>
            Your visit helps me improve this portfolio
          </small>
        </div>
      </div>
    </div>
  );
};

export default NameEntry;