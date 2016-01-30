// This is an illustration of how to utilize scopes to hide methods
// from being publically accessible
// This is essentially what a class is in coffscript because you have a
// Namespaced method that has many sub-methods within the scope

function foo() {
  var number = 3

  function doubleNumber(param) {
    console.log(param*2);
  }

  doubleNumber(number)
}

foo()
