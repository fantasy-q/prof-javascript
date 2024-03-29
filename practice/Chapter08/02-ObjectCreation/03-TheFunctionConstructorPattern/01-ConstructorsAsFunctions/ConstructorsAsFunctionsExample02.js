let Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}

// use as a constructor
let person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();   // "Nicholas"
           
// call as a function
Person("Greg", 27, "Doctor");  // adds to window
global.sayName();   // "Greg"
           
// call in the scope of another object
let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();  // "Kristen" 
