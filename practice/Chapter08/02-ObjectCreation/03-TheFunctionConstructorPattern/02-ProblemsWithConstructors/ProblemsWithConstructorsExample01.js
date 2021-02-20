function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = new Function("console.log(this.name)");  // logical equivalent 
}


// 02 
console.log(person1.sayName == person2.sayName);  // false
