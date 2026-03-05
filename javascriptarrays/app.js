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

// 4

// 5

// 6