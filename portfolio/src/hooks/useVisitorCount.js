import { useState, useEffect, useCallback } from 'react';

// Hook to fetch and display visitor count
export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVisitorCount = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/visitor-count');
      
      if (!response.ok) {
        throw new Error('Failed to fetch visitor count');
      }

      const data = await response.json();
      setVisitorCount(data.totalVisitors || 0);
    } catch (error) {
      console.error('Error fetching visitor count:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh visitor count every 30 seconds
  useEffect(() => {
    fetchVisitorCount();

    const interval = setInterval(fetchVisitorCount, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [fetchVisitorCount]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const refetch = () => {
    fetchVisitorCount();
  };

  return {
    visitorCount,
    loading,
    error,
    formattedCount: formatNumber(visitorCount),
    refetch,
  };
};