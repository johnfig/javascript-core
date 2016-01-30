// baz exhibits closure as foo() is able to remember and access
// its lexical scope even when the function is executing OUTSIDE
// of its lexical scope

function foo() {
  var a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}

baz = foo();
baz();

