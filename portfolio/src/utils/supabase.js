import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qyjxxgkswwujnbomcejr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5anh4Z2tzd3d1am5ib21jZWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTYxMDAsImV4cCI6MjA3OTI3MjEwMH0.ayZODxeBlIvUnqbTnMFmPkln0q33PtPpuHtRGLo8kME';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to handle Supabase errors
export const handleSupabaseError = (error) => {
  console.error('Supabase error:', error);
  
  // Return user-friendly error message
  if (error?.code === 'PGRST116') {
    return 'Resource not found';
  } else if (error?.code === 'PGRST301') {
    return 'Permission denied';
  } else if (error?.message?.includes('Failed to fetch')) {
    return 'Network error. Please check your connection.';
  } else {
    return error?.message || 'An unexpected error occurred';
  }
};

// Simple session ID generator
export const generateSessionId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};