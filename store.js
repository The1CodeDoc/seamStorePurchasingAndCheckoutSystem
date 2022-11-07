const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('close', function () {
  console.log('\nThank you for shopping at Seam Store!!!');
})
//Display name of store and welcome message
let storeName = "Seam Store";
function generateWelcomeMessage() {
  console.log(`Hello and welcome to ${storeName}!!!`);
}
generateWelcomeMessage(storeName)
//Display a list of available products and their prices
let productsAndpriceList = [
  { name: "Milk", price: 15 },
  { name: "Cereals", price: 10 },
  { name: "Peanuts", price: 5 },
  { name: "Sugar", price: 20 },
  { name: "Butter", price: 25 },
  { name: "Milo", price: 15 },
  { name: "Biscuits", price: 10 },
  { name: "Honey", price: 5 }
]
console.log(productsAndpriceList)
const customerCart = []
const addToCart = (item) => {
  customerCart.push(item)
}
const checkout = () => {
  let totalPrice = 0;
  // Go through the items the customer selected and aggregate the prices
  for (let i = 0; i < customerCart.length; i++) {
    totalPrice += customerCart[i].price
  }
  const receipt = `\nHi, your bill is $${totalPrice}, below is your invoice: `
  console.log(receipt);
  console.log(customerCart);
  rl.close()
}
const startFromBeginning = () => {
  rl.question('What product do you want to buy? ', function (customerChoice) {
    // clean up the customer's input
    const product = customerChoice.toLowerCase().trim()
    // Initiate a default message as Not Available
    let message = 'Not Available';
    // Search for the product in the database
    const isProductAvailable = productsAndpriceList.find((pro) => pro.name.toLowerCase() === product)
    // If the product is avaialbe...
    if (isProductAvailable) {
      // Print to the customer that it is available
      message = 'Available'
      console.log(message);
      // Ask them if they want to add it to cart
      rl.question('Do you want to add this item to your cart? (y|yes/n|no) ', function (customerChoice) {
        const answer = customerChoice.toLowerCase().trim()
        // Handle the customer's choice
        if (answer === 'yes' || answer === 'y') {
          addToCart(isProductAvailable)
          rl.question('Do you want to search for more products? (y|yes/n|no) ', function (customerChoice) {
            const answer = customerChoice.toLowerCase().trim()
            if (answer === 'yes' || answer === 'y') {
              startFromBeginning()
            } else {
              return checkout()
            }
          })
        } else {
          return checkout()
        }
      })
    } else {
      console.log(message);
    }
  })
}
startFromBeginning()

    // switch (product) {
    //   case 'milk':
    //     message = 'Available'
    //     break;
    //   case 'cereals':
    //     message = 'Available'
    //     break;
    //   case 'peanuts':
    //     message = 'Available'
    //     break;
    //   case 'sugar':
    //     message = 'Available'
    //     break;
    //   case 'butter':
    //     message = 'Available'
    //     break;
    //   case 'milo':
    //     message = 'Available'
    //     break;
    //   case 'biscuits':
    //     message = 'Available'
    //     break;
    //   case 'honey':
    //     message = 'Available'
    //     break;
    //   default:
    //     message = 'Not Avaliable';
    //     break;
    // }
    // console.log(message);
