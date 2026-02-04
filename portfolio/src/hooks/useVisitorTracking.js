import { useState, useCallback } from 'react';

// Simple visitor tracking hook
export const useVisitorTracking = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState(null);

  const trackVisitor = useCallback(async (visitorName) => {
    if (!visitorName || visitorName.trim().length === 0) {
      setError('Visitor name is required');
      return false;
    }

    if (visitorName.trim().length > 100) {
      setError('Visitor name is too long');
      return false;
    }

    try {
      setIsTracking(true);
      setError(null);

      const response = await fetch('/api/save-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorName: visitorName.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to save visitor');
      }

      await response.json(); // Consume the response
      return true;
    } catch (error) {
      console.error('Error tracking visitor:', error);
      setError(error.message);
      return false;
    } finally {
      setIsTracking(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    trackVisitor,
    isTracking,
    error,
    clearError,
  };
};