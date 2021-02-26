let person = {
  name: "Bruce",
  age: 30,
  hobbies: ["Games", "Anime"],
  greet: function () {
    alert("Hi there!");
  },
};

delete person.age; //delete properties
// person.age = undefined;//works but dont use. not recommended.
person.age = null;

person.isAdmin = true; //adding properties

console.log(person);
