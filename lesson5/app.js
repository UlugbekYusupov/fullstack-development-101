//Challenge 1

function getFirstElement(arr) {
    return arr[0]
}

console.log(getFirstElement([1, 2, 3, 4, 5]))

//Challenge 2

function getLastElement(arr) {
    return arr[arr.length - 1]
}

console.log(getLastElement([1, 2, 3, 4, 5]));


//Challenge 3

// let myColor = ["Green", "Blue", "Red", "Yellow", "Pink"]

// let string = myColor.join(", ")
// console.log(string)


//Challenge 4

// let inp = prompt("Enter the number: ")

// let dashed = inp.split("").join("-")

// console.log(dashed)


// Challenge 5
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1.sort());

// Challenge 6
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mf < m) {
//       mf = m;
//       item = arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(`${item} ( ${mf} times )`);

// Challenge 7
// let inp = prompt('enter the text: ')
// let reversed = inp.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join()
// console.log(reversed);

// Challenge 8
// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// color.map((e, i)=>{
//    if ((i+1)%10 == 1 && (i+1) !== 11) {
//       console.log(`${i+1}st choice is ${e}`);
//    }else if((i+1)%10 == 2 && (i+1) !== 12){
//       console.log(`${i+1}nd choice is ${e}`);
//    }else if((i+1)%10 == 3 && (i+1) !== 13){
//       console.log(`${i+1}rd choice is ${e}`);
//    }else{
//       console.log(`${i+1}th choice is ${e}`);
//    }
// })
// console.log(1%10 ==1 && !11); 

// Challenge 9
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let newarr = [];

if (array1.length > array2.length) {
  newarr = array1.map((e, i) => {
    if (array1[i] === undefined) {
      return 0 + array2[i];
    } else if (array2[i] === undefined) {
      return 0 + array1[i];
    } else {
      return array1[i] + array2[i];
    }
  });
} else {
  newarr = array2.map((e, i) => {
    if (array1[i] === undefined) {
      return 0 + array2[i];
    } else if (array2[i] === undefined) {
      return 0 + array1[i];
    } else {
      return array1[i] + array2[i];
    }
  });
}
console.log(newarr);