// Simple in-memory rate limiter for development
// In production, consider using Vercel Firewall SDK or database-backed limiting

const rateLimiter = {
  requests: new Map(),
  
  isRateLimited: (identifier, limit = 5, windowMs = 60000) => {
    const now = Date.now();
    const clientRequests = rateLimiter.requests.get(identifier) || { 
      count: 0, 
      resetTime: now + windowMs 
    };
    
    // Reset if window has expired
    if (now > clientRequests.resetTime) {
      clientRequests.count = 1;
      clientRequests.resetTime = now + windowMs;
    } else {
      clientRequests.count++;
    }
    
    rateLimiter.requests.set(identifier, clientRequests);
    
    // Clean up old entries periodically
    if (Math.random() < 0.01) { // 1% chance to clean up
      cleanup();
    }
    
    return clientRequests.count > limit;
  },
  
  getRemainingTime: (identifier) => {
    const clientRequests = rateLimiter.requests.get(identifier);
    if (!clientRequests) return 0;
    
    const now = Date.now();
    const remaining = Math.max(0, clientRequests.resetTime - now);
    return Math.ceil(remaining / 1000); // Return seconds
  }
};

// Clean up expired entries
function cleanup() {
  const now = Date.now();
  for (const [key, value] of rateLimiter.requests.entries()) {
    if (now > value.resetTime) {
      rateLimiter.requests.delete(key);
    }
  }
}

export default rateLimiter;