// Challenge 1
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);


// Challenge 2
function getFirstEl(array) {
    return array?.[0];
}
console.log(getFirstEl([4, 5, 6, 1]));


// Challenge 3
function last(arr) {
    return arr?.[arr.length - 1];
}
console.log(last([4, 5, 6, 1]));


// Challenge 4
function add(colors) {
    return colors.join(", ");
}
const myColors = ["red", "green", "blue"];
console.log(add(myColors));


// Challenge 5
function dashBetween(num) {
    return String(num).split("").join("-");
}
const numberInput = window.prompt("Enter any number:");
console.log(dashBetween(numberInput));


// Challenge 6
function findMode(arr) {
    const count = {};
    let maxItem = arr[0];
    let maxCount = 0;

    for (const item of arr) {
        count[item] = (count[item] || 0) + 1;

        if (count[item] > maxCount) {
            maxCount = count[item];
            maxItem = item;
        }
    }

    return `${maxItem} (${maxCount} times)`;
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(findMode(arr));


// Challenge 7
function swapCase(text) {
    return text
        .split("")
        .map(char =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
}

console.log(swapCase(window.prompt("Enter any text:")));


// Challenge 8
function displayOrder(colors) {
    const suffix = ["th", "st", "nd", "rd"];

    colors.forEach((color, i) => {
        const index = i + 1;
        const ord =
            index % 100 >= 11 && index % 100 <= 13
                ? "th"
                : suffix[index % 10] || "th";

        console.log(`${index}${ord} choice is ${color}`);
    });
}

const colors = ["red", "green", "blue", "yellow", "orange"];
displayOrder(colors);


// Challenge 9
function sum(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const a = arr1[i] ?? 0;
        const b = arr2[i] ?? 0;
        result.push(a + b);
    }

    return result;
}

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

console.log(sum(arr1, arr2));