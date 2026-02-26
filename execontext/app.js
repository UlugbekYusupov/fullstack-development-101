// 1
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Jahon"));

// 2
let greet2 = function(name){
  return `Hello, ${name}`;
}
console.log(greet2("Jahon"));

// 3
let greet3 = (name) => {
  return `Hello, ${name}`;
}
console.log(greet3("Jahon"));

// 4
(function (name){
  return `Hello ${name}`
})("Jahon")

// 5
let greet5 = new Function(
  "name",
  "return `Hello, ${name}`;"
);

console.log(greet5("Jahonjj"));