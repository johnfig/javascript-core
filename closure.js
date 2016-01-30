// baz exhibits closure as foo() is able to remember and access
// its lexical scope even when the function is executing OUTSIDE
// of its lexical scope

// Example of basic closure

function foo() {
  var a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}

baz = foo();
baz();


// Asynchronous timeouts using closures

for (var i=1; i<=5; i++) {
  (function() {
    var j = i;
    setTimeout( function timer(){
      console.log(j);
    }, j*1000);
  })();
}

