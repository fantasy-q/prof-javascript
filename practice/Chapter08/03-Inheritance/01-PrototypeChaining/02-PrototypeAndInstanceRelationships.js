function SuperType() {
  this.property = true;
}

function SubType() {
  this.subproperty = false;
}
// inherit from SuperType
SubType.prototype = new SuperType();

let instance = new SubType();

console.log(instance instanceof Object);     // true
console.log(instance instanceof SuperType);  // true
console.log(instance instanceof SubType);    // true
/**
 * Here, the instance object is technically an instance of Object, SuperType,
 * and SubType because of the prototype chain relationship. The result is that
 * instanceof returns true for all of these constructors.
 */
