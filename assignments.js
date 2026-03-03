// challenge 1

function pricing(cart) {
    // cart is an array of item prices, e.g. [10, 5, 3]
    const itemCount = cart.length;

    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i];
    }

    let discountRate = 0;
    if (itemCount >= 5) discountRate = 0.2;
    else if (itemCount >= 3) discountRate = 0.1;

    const discountAmount = subtotal * discountRate;
    const total = subtotal - discountAmount;

    return Number(total.toFixed(2));
}

// examples:
console.log(pricing([10, 10])); // 20 (no discount)
console.log(pricing([10, 10, 10])); // 27 (10% off)
console.log(pricing([10, 10, 10, 10, 10])); // 40 (20% off)


// challenge 2

function passwordStrength(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    const passedCount =
        (hasMinLength ? 1 : 0) +
        (hasUppercase ? 1 : 0) +
        (hasNumber ? 1 : 0) +
        (hasSpecial ? 1 : 0) +
        (hasLowercase ? 1 : 0);

    if (passedCount === 5) return "strong";
    if (passedCount >= 3) return "medium";
    return "weak";
}

console.log(passwordStrength("abc"));
console.log(passwordStrength("password1"));
console.log(passwordStrength("Password1!"));

// challenge 3
function atmWithdraw(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
        return { ok: false, error: "Amount must be a positive integer." };
    }

    if (amount % 10 !== 0) {
        return { ok: false, error: "Amount must be in multiples of 10." };
    }

    const bills = [100, 50, 20, 10];
    const dispense = {};
    let remaining = amount;

    for (const bill of bills) {
        const count = Math.floor(remaining / bill);
        if (count > 0) dispense[bill] = count;
        remaining -= count * bill;
    }

    return { ok: true, amount, dispense };
}

// examples:
console.log(atmWithdraw(130));
console.log(atmWithdraw(280));
console.log(atmWithdraw(125));