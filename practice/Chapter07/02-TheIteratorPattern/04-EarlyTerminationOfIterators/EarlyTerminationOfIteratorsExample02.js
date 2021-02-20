let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();

console.log('1st iterator');
for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break
  }
}
// 1
// 2
// 3
console.log('2nd iterator');
for (let i of iter) {
  console.log(i);
}
// 4
// 5 
