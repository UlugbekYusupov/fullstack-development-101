// task 1
const students=[
    {name: "Alice", scores:[80,90,100]},
    {name: "Bob", scores:[50,60,70]},
    {name: "Alice", scores:[30,40,20]}

]
let avg=[]
for(let i=0; i<students.length; i++){
    let sum=students[i].scores.reduce(function(prev,next){
        return prev+next;
    })
    let eachEvg=sum/students[i].scores.length
    avg.push(eachEvg);
    
    
}
avg.sort();

console.log(`The result is ${Math.max(...avg)}`);

// task 2


const cart=[
    {id:1,name:"Laptop",price:900, quantity:1},
    {id:2,name:"Mouse",price:50, quantity:2},
    {id:3,name:"keyboard",price:100, quantity:1},

]
let total=0
for(let i=0; i<cart.length; i++){
    let eachTotal=cart[i].price*cart[i].quantity
    if (eachTotal>100){
        eachTotal+=eachTotal*0.1
        total+=eachTotal
    }
}
console.log(`the result is $${total}`)

// task 3

//  class Products{
//     products=[
//         {id:1, name:"laptop", price:1200,stock:10},
//         {id:2, name:"Phone", price:700,stock:15}
//     ]
//     // constructor(name,price,stock){
//     //     this.name=name;
//     //     this.price=price;
//     //     this.stock=stock
//     // }

//     addProduct(){
//         const name=window.prompt("Enter the name of the product: ");
//         const price=window.prompt("Enter the price of the product: ");
//         const stock=window.prompt("Enter the stock of the product: ");
        
//         const newProduct = {
//             id: this.products.length + 1,
//             name: name,
//             price: price,
//             stock: stock
//         };

//         this.products.push(newProduct); 
//         console.log(" ✅ Added Successfully ") 
//     }
//     updateStock(){
//         const idP=Number(window.prompt("Enter the id of the product: "));
//         let found = false;

//         for(let i = 0; i < this.products.length; i++){
//             if(this.products[i].id === idP){
//                 const stockLevel = Number(window.prompt("Enter the new stock: "));
//                 this.products[i].stock = stockLevel;
//                 console.log("✅ Updated Successfully");
//                 found = true;
//                 break;
//             }
//         }
    
//         if(!found){
//             console.log("❗ Product not found");
//         }
//     }
//     deleteProduct(){
//         const idP=window.prompt("Enter the id of the product: ");
//         const index = this.products.findIndex(item => item.id === idP);
//         if (index!==-1){
//             this.products.splice(index, 1);
//             console.log(" ✅ Deleted Successfully ")
//         }else{
//             console.log("❗️ Failed  ")
//         }
//     }
//     findProduct(){
//         const nameF=window.prompt("Enter the name of the product: ")
//         const product = this.products.find(item => item.name.toLowerCase() === nameF.toLowerCase());
//         if (product){
//             console.log(this.products.id, this.products.name, this.products.stock)
//         }else{
//             console.log("❗️ Not Found  ")
//         }
//     }


// }

// const product1=new Products()
// console.log(product1.products);
// // product1.addProduct();
// console.log(product1.products);
// product1.updateStock();

// task 6


const inventory=[
    {itemName:"Laptop", category:"Electronics",  stock:5},
    {itemName:"Phone", category:"Electronics",  stock:10},
]

function findTotalByCategory(category){
    return inventory
    .filter((item)=> item.category===category)
    .reduce((sum,item)=>sum+item.stock,0);
    
}

console.log(findTotalByCategory("Electronics"));


