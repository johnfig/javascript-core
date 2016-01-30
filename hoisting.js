// This is an example of hoisting
// You would expect that var a was redefined as undefined
// Declaration is always done before assignment
// var a can happen anywhere within the scope because it is compiled first
// after that variables can be assigned

a = 2
var a
console.log(a);

// or

b = 5
console.log(b);
var b
