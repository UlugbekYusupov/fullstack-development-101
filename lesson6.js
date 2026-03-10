// arrays and spread operators

let original =[1,2,3];
let copy=[...original]
console.log(copy)


// // practice
// // 2
function getFirstEl(array){
    return array[0]
}
console.log(getFirstEl([4,5,6,1]))

// 2
function last(arr){
    return arr[arr.length-1]
}
console.log(last([4,5,6,1]))


// // 3
function add(colors){
    return colors.join(", ")
}

let myColors=["red",'Green', "blue"]
console.log(add(myColors))


// // 4
function dashBetween(num){
    let numbers=num.split("")
    return numbers.join("-")
}
let num=window.prompt("Enter any number: ")
console.log(dashBetween(num))


// 5
function findMode(arr){
    let count={}
    let maxItem=arr[0]
    let maxCount=0
    for(let i=0; i<arr.length; i++){
        let item=arr[i]

        if (count[item]){
             count[item]++;
        }else{
            count[item]=1;
        }

        if (count[item]>maxCount){
            maxCount=count[item];
            maxItem=item;
        }
    }

    return `${maxItem} (${maxCount} times) `

}

let arr=[3, 'a', 'a', 'a',2, 3, 'a',3, 'a', 2, 4, 9, 3 ]
console.log(findMode(arr))


// 7
function swapCase(text){
    textArr=text.split("")
    for (let i=0; i<textArr.length; i++){
        if (textArr[i]==textArr[i].toUpperCase()){
            textArr[i]=textArr[i].toLowerCase();
        }else{
            textArr[i]=textArr[i].toUpperCase();
        }
    }
    return textArr.join("");

}

console.log(swapCase(window.prompt("Enter any text:  ")))

// 9
function sum(arr1, arr2){
    left=0
    right=0
    let sumArr=[]
    while(left<arr1.length && right<arr2.length){
        sumArr.push(arr1[left]+arr2[right])
        left++;
        right++;
    }

    while(left<arr1.length){
        sumArr.push(arr1[left])
        left++;
    }
    while(right<arr2.length){
        sumArr.push(arr2[right])
        right++;
    }
    return sumArr

}
let arr1=[1,0,2,3,4]
let arr2=[3,5,6,7,8,13]

console.log(sum(arr1, arr2))

// 8

function displayOrder(colors,o){
    for(let i=0; i<colors.length; i++){
        if(i+1==1){
            console.log(`${i+1}st choice is ${colors[i]}`)
        }else if(i+1==2){
            console.log(`${i+1}nd choice is ${colors[i]}`)
        }else if(i+1==3){
            console.log(`${i+1}rd choice is ${colors[i]}`)
        }else{
            console.log(`${i+1}th choice is ${colors[i]}`)
        }
    }
}


let colors=['red', 'green', 'blue','yellow', 'orange']
let o=['th', 'st', 'nd', 'rd']
displayOrder(colors,o);

