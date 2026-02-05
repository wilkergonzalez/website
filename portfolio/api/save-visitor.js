import { createClient } from '@supabase/supabase-js';
import rateLimiter from './lib/rateLimiter.js';

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://qyjxxgkswwujnbomcejr.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5anh4Z2tzd3d1am5ib21jZWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTYxMDAsImV4cCI6MjA3OTI3MjEwMH0.ayZODxeBlIvUnqbTnMFmPkln0q33PtPpuHtRGLo8kME';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP for rate limiting
  const ip = req.headers.get('x-forwarded-for') || 
             req.headers.get('x-real-ip') || 
             req.connection?.remoteAddress || 
             'unknown';

  // Rate limiting: 5 submissions per minute
  if (rateLimiter.isRateLimited(ip, 5, 60000)) {
    const remainingTime = rateLimiter.getRemainingTime(ip);
    return res.status(429).json({ 
      error: 'Rate limit exceeded. Please try again later.',
      retryAfter: remainingTime
    });
  }

  try {
    const { visitorName } = req.body;

    // Validate input
    if (!visitorName || typeof visitorName !== 'string' || visitorName.trim().length === 0) {
      return res.status(400).json({ error: 'Valid visitor name is required' });
    }

    if (visitorName.trim().length > 100) {
      return res.status(400).json({ error: 'Visitor name is too long' });
    }

    const trimmedName = visitorName.trim();

    // Save visitor to database
    const { data, error } = await supabase
      .from('visitors')
      .insert({
        visitor_name: trimmedName,
        landing_page: 'home',
        session_id: generateSessionId()
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save visitor data' });
    }

    // Update visitor count
    const { error: analyticsError } = await supabase
      .rpc('increment_visitor_count');

    if (analyticsError) {
      console.error('Analytics update error:', analyticsError);
      // Continue even if analytics update fails
    }

    res.status(200).json({ 
      success: true, 
      visitorId: data.id,
      message: 'Visitor saved successfully'
    });

  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Generate simple session ID
function generateSessionId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}