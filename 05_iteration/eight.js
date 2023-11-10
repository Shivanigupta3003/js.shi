const myNums = [1, 2, 3]

//const myTotal = myNums.reduce( function (acc, curr) {
   // console.log(`acc: ${acc} and curr: ${curr}`);
  //  return acc + curr
//}, 3 )

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 700
    },
    {
        itemName: "cpp course",
        price: 900
    },
    {
        itemName: "python course",
        price: 1000
    },
    {
        itemName: "java course",
        price: 400
    },
]

//const priceToPay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0 )

const priceToPay = shoppingCart.reduce( function(acc,item) {
    console.log(`acc: ${acc} and item: ${item}`);
    return acc + item.price
    
}, 0)

console.log(priceToPay);