// Lecture 6

const colors = ["Red","Green","Blue"];
console.log(colors);


let nums = new Array(5); // Creating empty array
console.log(nums);

let names = new Array("John","Husan","Kim");
console.log(names);


let original = [12,33,450];
let copy = [...original];

console.log(copy);

let numbers = Array.of(45);
console.log(numbers);



// Methods


// Add to end
colors.push("Orange");
console.log(colors);

// Add to first

colors.unshift("Grey");
console.log(colors);

// Remove from start

colors.shift();
console.log(colors);

// Remove from end

colors.pop();
console.log(colors);


// Mapping

const mapped_original = original.map((x) => x * 2);
console.log(mapped_original);


// Filtering

const filtered_array = original.filter((x) => x>50);
console.log(filtered_array);

// Reducing

    