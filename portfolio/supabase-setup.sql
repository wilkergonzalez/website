-- Create visitors table
CREATE TABLE visitors (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_name text NOT NULL,
  visit_timestamp timestamptz DEFAULT now(),
  landing_page text DEFAULT 'home',
  session_id text,
  created_at timestamptz DEFAULT now()
);

-- Create visitor_analytics table for faster queries
CREATE TABLE visitor_analytics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  total_visitors bigint DEFAULT 0,
  last_updated timestamptz DEFAULT now()
);

-- Insert initial analytics record
INSERT INTO visitor_analytics (total_visitors, last_updated) 
VALUES (0, now());

-- Create a function to update visitor count
CREATE OR REPLACE FUNCTION increment_visitor_count()
RETURNS void AS $$
BEGIN
  UPDATE visitor_analytics 
  SET total_visitors = total_visitors + 1,
      last_updated = now()
  WHERE id = (SELECT id FROM visitor_analytics LIMIT 1);
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security (optional but recommended)
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies (public read access for analytics)
CREATE POLICY "Allow public read access to analytics" 
  ON visitor_analytics FOR SELECT USING (true);

-- Create policy for visitor insertions
CREATE POLICY "Allow visitor insertions" 
  ON visitors FOR INSERT WITH CHECK (true);