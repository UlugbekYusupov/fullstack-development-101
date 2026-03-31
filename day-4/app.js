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







// HomeTasks (Challenges)


// Challenge 1
function first(arr, n) {

  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  if (n === undefined) {
    return arr[0];
  }


  if (n < 0) {
    return n;
  }

  return arr.slice(0, n);
}
  
console.log(first([32,34,56,23]));
console.log(first([],4));
console.log(first([32,435,6,543,56,3],4));
console.log(first([7, 9, 0, -2],6)); 
console.log(first([7, 9, 0, -2],-3)); 



// Challenge 2

function last(arr, n) {
  if (n === undefined) {
    return arr[-1];
  }

  else if (arr.length < n) {
    return arr
  }

  else if (arr.length >= n) {
    return arr.slice(-n); 
  }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],6));
console.log(last([7, 9, 0, -2],3)); 

// Challenge 3
myColor = ["Red", "Green", "White", "Black"]; 
console.log(myColor.join(","));


// Challenge 4
nums = "025468";  
nums_tire = "";
for (let i = 0; i < nums.length; i++) {
  nums_tire+=nums[i]
  if (i !==nums.length-1){
    nums_tire+="-"
  }
  
}

console.log(nums_tire);



// Challenge 5
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1.sort((a, b) => a - b));

// Challenge 6

function mostFrequent(arr) {
  let maxCount = 0;
  let mostItem;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostItem = arr[i];
    }
  }

  return mostItem + " ( " + maxCount + " times )";
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFrequent(arr1));

// Challenge 7

let string = prompt("Enter any string: ");
let new_str = "";
for (let i = 0; i < string.length; i++) {
  let str = string[i];
  if (str === str.toUpperCase()){
    new_str+=str.toLowerCase()
  }else{
    new_str+=str.toUpperCase()
  }
}

console.log(new_str);




function swapString(str) {
  let string = String(str);
  let new_str = "";
  for (let i = 0; i < string.length; i++) {
    const str = string[i];
    if (str === str.toUpperCase()) {
      new_str+=str.toLowerCase()
    }else{
      new_str+=str.toUpperCase()
    }
    
  }

  return new_str;
}

console.log(swapString("AsALOMu alaYkum"));


// Challenge 8





// Challenge 9

//Student Grade Management System

let students = [
  
]

