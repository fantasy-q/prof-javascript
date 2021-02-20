// This class implements the Iterable interface.
// Invoking the default iterator factory will return
// an iterator object that implements the Iterator interface.
class Foo {
  [Symbol.iterator]() {
    return {
      next() {
        return { done: false, value: 'foo' };
      }
    }
  }
}
let f = new Foo();
// Logs an object which implements the Iterator interface
console.log(f[Symbol.iterator]()); // { next: f() {} }
// The Array type implements the Iterable interface.
// Invoking the default iterator of an Array type
// will create an instance of ArrayIterator.
let a = new Array();
// Logs an instance of ArrayIterator
console.log(a[Symbol.iterator]()); // Array Iterator {}