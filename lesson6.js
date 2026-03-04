// Task 1
function first(arr, n) {
    if (n == null) return arr[0];
    if (n < 0) return n;
    return arr.slice(0, n);
}

//Task 2
function last(arr, n) {
    if (n == null) return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - n, 0));
}

//Task 3
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));

//Task 4
function insertDash(num) {
    return num.toString().split("").join("-");
}

//Task 5
let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1.sort((a,b) => a - b));

//Task 6
function mostFrequent(arr) {
    let map = {}, max = 0, res;
    for (let v of arr) {
        map[v] = (map[v] || 0) + 1;
        if (map[v] > max) max = map[v], res = v;
    }
    return `${res} (${max} times)`;
}

//Task 7
function swapCase(str) {
    return str.split("")
        .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
        .join("");
}

//Task 8
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {
    let ord = o[(i+1)] || o[0];
    console.log(`${i+1}${ord} choice is ${color[i]}.`);
}

// Task 9
function sumArrays(a, b) {
    let len = Math.max(a.length, b.length);
    return Array.from({length: len}, (_, i) => (a[i]||0) + (b[i]||0));
}