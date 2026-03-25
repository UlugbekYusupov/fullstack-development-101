const book={
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
};
// xossalarni chiqarish : nuqta orqali
console.log(book.title);
console.log(book.author);
console.log(book.year);
// qavs orqali
console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);

// add nested object
book.address={
    city:"Tashkent",
    libraryName: "National Library"
   };
 console.log(book.address.city)
 console.log(book.address.libraryName);
// keys and values
console.log(Object.keys(book));
console.log(Object.values(book));


// 2
const fruits=['olma','banan','uzum','anor','shaftoli']
const prices=[12000,8000,25000,5000,18000]

function sortPrices(arr){
    return arr.sort(function(a,b){
        return a-b;
    });
}
console.log(sortPrices(prices));

