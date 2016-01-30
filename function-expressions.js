// Create simple function expressions
// Expressions are not bound to an identifier
// They can be anything because they are immediately invoked

// IIFE (Immediately invoked function expression)
// This is a common design pattern
(function foo() {
  console.log('foo');
})();

// This is a standard function declaration that is invoked at a later time
function bar() {
  console.log('bar');
};

bar();
