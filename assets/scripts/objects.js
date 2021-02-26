let person = {
  "first name": "Bruce", //all strings are valid key names if enclosed in brackets. still dont use white spaces.
  age: 30,
  hobbies: ["Games", "Anime"],
  greet: function () {
    alert("Hi there!");
  },
};

delete person.age; //delete properties
// person.age = undefined;//works but dont use. not recommended.

person.age = null; //sets age to null

person.isAdmin = true; //adding properties

console.log(person["first name"]); //calling these keys use special syntax
