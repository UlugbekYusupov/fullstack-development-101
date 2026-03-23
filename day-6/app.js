// 1. Object Literal ({})
{
  const personLiteral = {
    name: "Ali",
    age: 20,
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  };
  console.log(personLiteral.greet());
}

// 2. Using new Object()
{
  const personObject = new Object();
  personObject.name = "Ali";
  personObject.age = 20;
  personObject.greet = function () {
    return `Hi, I'm ${this.name}`;
  };
  console.log(personObject.greet());
}

// 3. Factory Function
{
  function createPerson(name, age) {
    return {
      name,
      age,
      greet() {
        return `Hi, I'm ${this.name}`;
      }
    };
  }

  const p1 = createPerson("Ali", 20);
  const p2 = createPerson("Lola", 22);
  console.log(p1.greet(), p2.greet());
}

// 4. Constructor Function
{
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.greet = function () {
    return `Hi, I'm ${this.name}`;
  };

  const p1 = new Person("Ali", 20);
  console.log(p1.greet());
}

// 5. Object.create(prototype)
{
  const personProto = {
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  };

  const person = Object.create(personProto);
  person.name = "Ali";
  person.age = 20;
  console.log(person.greet());
}

// 6. ES6 Class
{
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hi, I'm ${this.name}`;
    }
  }

  const p1 = new PersonClass("Ali", 20);
  console.log(p1.greet());
}

// 7. Singleton Object (Object.freeze())
{
  const CONFIG = Object.freeze({
    apiUrl: "https://api.example.com",
    timeout: 5000
  });

  console.log(CONFIG.apiUrl, CONFIG.timeout);
}




// Challenges

// Challenge 1

const students = [
  {name:"Alice", score: [90,238,94]},
  {name:"Bob", score: [85,92,88]},
  {name:"Charlie", score: [78,85,80]}
]

function getAvergeScores(students) {
  
}