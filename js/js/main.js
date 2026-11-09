const cart ={
plantName: "Monstera",
price: 80,
quantiti:  2,
discount:  30,
freeDeliveryLimit: 100,

}
cart.discount === 30
cart.quantiti = 3
const subtotal = cart.price * cart.quantiti
const total = subtotal - cart.discount

console.log(`Subtotal:$${subtotal}`)
console.log(`Total:$${total}`)
console.log("Quantity is not 2:",cart.quantiti = 2)
console.log("Discount is 30:",cart.discount === 30)
console.log("Free delivery:",cart.discount <= 100)
