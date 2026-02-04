import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://qyjxxgkswwujnbomcejr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5anh4Z2tzd3d1am5ib21jZWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTYxMDAsImV4cCI6MjA3OTI3MjEwMH0.ayZODxeBlIvUnqbTnMFmPkln0q33PtPpuHtRGLo8kME';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get visitor count from analytics table for performance
    const { data, error } = await supabase
      .from('visitor_analytics')
      .select('total_visitors, last_updated')
      .single();

    if (error) {
      console.error('Analytics query error:', error);
      
      // Fallback: count directly from visitors table
      const { data: countData, error: countError } = await supabase
        .from('visitors')
        .select('id', { count: 'exact', head: true });

      if (countError) {
        throw countError;
      }

      res.status(200).json({ 
        totalVisitors: countData.length || 0,
        lastUpdated: new Date().toISOString()
      });
      return;
    }

    res.status(200).json({ 
      totalVisitors: data.total_visitors || 0,
      lastUpdated: data.last_updated
    });

  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}