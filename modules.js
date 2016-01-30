// Modules NEED return values denoted by object-literal syntax
// This exposes the methods and variables publically
// This is the basis of how coffeescript classes are created

function DogModule(name, age) {
  var name = name
  var age = age

  function myName() {
    dogName = 'My name is ' + name
    console.log(dogName)
  }

  function myAge() {
    dogAge = 'My age is ' + age
    console.log(dogAge)
  }

  return {
    name: name,
    age: age,
    myName: myName,
    myAge: myAge
  }
}

var sparky = DogModule('Sparky', 7);

console.log(sparky.name);
console.log(sparky.age);

sparky.myName();
sparky.myAge();
