// 1
function first(arr, n) {
  if (arr.length === 0) return [];
  if (n === undefined) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  return arr.slice(0, n);
}
console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));

// 2
function last(arr, n){
  if(arr.length === 0) return [];

  if(n === undefined){
    return arr[arr.length - 1];
  }

  return arr.slice(Math.max(arr.length - n, 0));
}

// 3
let myColor = ["Red", "Green", "White", "Black"];

let result = myColor.join(",");

console.log(result); 

// 4
function insertDashes(numStr) {
  return String(numStr).split("").join("-");
}

console.log(insertDashes("025468"));

// 5
let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort((a, b) => a - b);

console.log(arr1);

// 6
function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let maxItem = null;

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;

    if (freq[item] > maxCount) {
      maxCount = freq[item];
      maxItem = item;
    }
  }

  return `${maxItem} (${maxCount} times)`;
}

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr));

// 7
function swapCase(str) {
  let result = "";

  for (let ch of str) {
    if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
      // katta harf
      result += ch.toLowerCase();
    } else if (ch === ch.toLowerCase() && ch !== ch.toUpperCase()) {
      // kichik harf
      result += ch.toUpperCase();
    } else {
      // space yoki belgi
      result += ch;
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));

// 8
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th","st","nd","rd"];

for(let i = 0; i < color.length; i++){

  let ordinal;

  if(i + 1 == 1){
    ordinal = o[1];
  } 
  else if(i + 1 == 2){
    ordinal = o[2];
  }
  else if(i + 1 == 3){
    ordinal = o[3];
  }
  else{
    ordinal = o[0];
  }

  console.log((i+1) + ordinal + " choice is " + color[i]);
}

// 9
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

let result2 = [];

let maxLength = Math.max(array1.length, array2.length);

for(let i = 0; i < maxLength; i++){

  let num1 = array1[i] || 0;
  let num2 = array2[i] || 0;

  result2.push(num1 + num2);
}

console.log(result2);