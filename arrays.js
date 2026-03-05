// challenge 1
function getFirstElement(arr, n) {
    return arr.slice(0, n)
}

// challenge 2
function getLastElement(arr, n) {
    return arr.slice(-n)
}

// challenge 3
function joinList(arr) {
    return arr.join(", ")
}

// challenge 4
function dashedNumbers(n) {
    let stringNumber = String(n)
    let dashedNumber = ""
    for (let i = 0; i < stringNumber.length; i++) {
        dashedNumber += "-" + stringNumber[i]
    }
    return dashedNumber.slice(1)
}

// challenge 5
function sortArr(arr) {
    arr.sort()
    return arr
}

// challenge 6
function findMostFrequent(arr) {
    const counts = {};
    let maxCount = 0;
    let mostFrequentItem;


    for (const item of arr) {
        counts[item] = (counts[item] || 0) + 1;

        if (counts[item] > maxCount) {
            maxCount = counts[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}


// challenge 7
function caseSwap(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str = str.replace(str[i], str[i].toLowerCase())
        }
        else {
            str = str.replace(str[i], str[i].toUpperCase())
        }
    }
    return str
}

// challenge 8
function colorsInOrder(arr, orders) {

    for (let i = 0; i < arr.length; i++) {
        let s = orders[i + 1] || orders[0];
        console.log(`${i + 1}${s} choice is ${arr[i]}.`);
    }
}

// challenge 9
function eachSum(arr1, arr2) {
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }
    return res
}

