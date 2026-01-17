const Events = require('event-pubsub');
console.log('Type:', typeof Events);
console.log('Value:', Events);
try {
  class Test extends Events {}
  console.log('Extend success');
} catch (e) {
  console.log('Extend failed:', e.message);
}
