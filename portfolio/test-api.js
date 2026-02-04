// Simple test script for API endpoints
// Run this in the browser console to test functionality

// Test 1: Save visitor
async function testSaveVisitor() {
  console.log('Testing save-visitor endpoint...');
  
  try {
    const response = await fetch('/api/save-visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        visitorName: 'Test User'
      }),
    });

    const data = await response.json();
    console.log('Save visitor response:', data);
    
    if (response.ok) {
      console.log('✅ Save visitor test passed');
    } else {
      console.log('❌ Save visitor test failed:', data.error);
    }
  } catch (error) {
    console.error('❌ Save visitor test error:', error);
  }
}

// Test 2: Get visitor count
async function testVisitorCount() {
  console.log('Testing visitor-count endpoint...');
  
  try {
    const response = await fetch('/api/visitor-count');
    const data = await response.json();
    console.log('Visitor count response:', data);
    
    if (response.ok) {
      console.log('✅ Visitor count test passed');
      console.log(`Current visitor count: ${data.totalVisitors}`);
    } else {
      console.log('❌ Visitor count test failed:', data.error);
    }
  } catch (error) {
    console.error('❌ Visitor count test error:', error);
  }
}

// Test 3: Rate limiting
async function testRateLimit() {
  console.log('Testing rate limiting (sending multiple requests)...');
  
  for (let i = 1; i <= 7; i++) {
    try {
      const response = await fetch('/api/save-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorName: `Rate Limit Test ${i}`
        }),
      });

      const data = await response.json();
      console.log(`Request ${i}:`, response.status, data);
      
      if (response.status === 429) {
        console.log('✅ Rate limiting test passed - request blocked');
        break;
      }
    } catch (error) {
      console.error(`❌ Rate limit test error on request ${i}:`, error);
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Starting API tests...');
  
  await testSaveVisitor();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await testVisitorCount();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await testRateLimit();
  
  console.log('✅ All tests completed!');
}

// Make functions available in console
window.testAPI = {
  saveVisitor: testSaveVisitor,
  visitorCount: testVisitorCount,
  rateLimit: testRateLimit,
  runAll: runAllTests
};

console.log('🧪 Test functions loaded. Run window.testAPI.runAll() to execute all tests.');