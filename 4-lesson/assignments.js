// 1
function dynamicPrice (count, price) {
    if (count < 3){
        return price
    }
    else if (count >= 3 && count <= 4) {
        return price -= price * 0.1
    } else {
        return price -= price * 0.2
    }
}

console.log(dynamicPrice(5, 10000))

// 2
function isStrong (pass) {
}

let password = "password123Ps."
