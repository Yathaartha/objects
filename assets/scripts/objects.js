const userChosenKeyName = "level";

let person = {
  "first name": "Bruce", //all strings are valid key names if enclosed in brackets. still dont use white spaces.
  age: 30,
  hobbies: ["Games", "Anime"],
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

const keyName = "first name";

delete person.age; //delete properties
// person.age = undefined;//works but dont use. not recommended.

person.age = null; //sets age to null

person.isAdmin = true; //adding properties

console.log(person["first name"]); //calling these keys use special syntax
console.log(person[keyName]); //alternate way to call
console.log(person[1.5]);
// console.log(person["1.5"]);//also works.
