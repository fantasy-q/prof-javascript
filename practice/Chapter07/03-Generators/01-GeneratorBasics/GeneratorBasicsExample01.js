console.log('Generator declaration');
// Generator function declaration
function* generatorFnA() {}

// Generator function expression
let generatorFnB = function* () {}

// Object literal method generator function
let foo = {
  * generatorFnC() {}
}

// Class instance method generator function
class Foo {
  * generatorFnD() {}
}

// Class static method generator function
class Bar {
  static * generatorFnE() {}
}
