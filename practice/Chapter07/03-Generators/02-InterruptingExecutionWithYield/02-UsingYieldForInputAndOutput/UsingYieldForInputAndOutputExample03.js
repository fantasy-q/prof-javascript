function* generatorFn() {
  for (let i = 0;;++i) {
    yield i;
  }
}

let generatorObject = generatorFn();

console.log(generatorObject.next().value);  // 0
console.log(generatorObject.next().value);  // 1
console.log(generatorObject.next().value);  // 2
console.log(generatorObject.next().value);  // 3
console.log(generatorObject.next().value);  // 4
console.log(generatorObject.next().value);  // 5 
console.log();
console.log(generatorObject.next());  // 0
console.log(generatorObject.next());  // 1
console.log(generatorObject.next());  // 2
console.log(generatorObject.next());  // 3
console.log(generatorObject.next());  // 4
console.log(generatorObject.next());  // 5 
