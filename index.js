var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var item = {};
  Object.assign (item,{['itemName']:name})
  Object.assign (item,{['itemPrice']:Math.floor((Math.random()*100))})
  cart.push(item)
  return `${name} has been added to your cart.`
}

function viewCart() {
  var whatYouGot = 'In your cart, you have '
  for(let i = 0; i < cart.length; i++){
    whatYouGot = whatYouGot + ` ${cart[i]['itemName']} at $ ${cart[i]['itemPrice']},`
  }
  whatYouGot = whatYouGot.slice(0,-1)+'.';
  return whatYouGot;
}

function total() {
  var cartTotal = 0
  for(let i = 0; i < cart.length; i++){
    cartTotal = (cartTotal + cart[i]['itemPrice'])
  }
  return cartTotal
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    var lkupName = cart[i]['itemName']
    var find = false
    if (lkupName === item){
      find = true
      cart.splice(i,1)
    }
    if (!find){`That item is not in your cart.`}
  }
  return cart
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    cart.splice(0)
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
