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

function checkPassword(password) {
   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   if (regex.test(password)) {
      console.log('password is strong');
   } else {
      console.log('password is weak');

   }
}
checkPassword('1231!Asas')

// 3
function withdrawATM(amount) {
  if (amount % 10 !== 0) {
    return "Error: Amount must be a multiple of $10.";
  }

  const bills = [100, 50, 20, 10];
  let result = {};
  let remaining = amount;

  bills.forEach(bill => {
    let count = Math.floor(remaining / bill);
    if (count > 0) {
      result[`$${bill}`] = count;
      remaining -= count * bill;
    }
  });

  return result;
}

// 6

function bankAccount(balance) {
   return {
      balance: balance,
      deposit: (e)=>balance + e,
      withdraw: (e)=>balance - e,
      viewBalange: ()=>balance,
   }
}
console.log(bankAccount(1000).withdraw(10))

// 7
function RoleBasedAccessSystem(role) {
   switch (role) {
      case 'admin':
         console.log('can add, edit, delete content');
         break;
      case 'editor':
         console.log('can add, view');
         break;
      default:
         console.log('can only view');
         break;
   }
}

// 9

function dinamicTaxCalculator(income) {
  if (income > 10000) {
    console.log("no tax");
  } else if (income > 5000) {
    console.log("10% tax");
  } else {
    console.log(`20% tax`);
  }
}