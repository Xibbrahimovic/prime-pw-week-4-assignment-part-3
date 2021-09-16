console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create global variable Basket
let basket = [];
const maxItems = 5; //max items variable

function addItem(item) {
  if (isFull) { //is the length of array greater than maxItems
    console.log(isFull()); //link isFull function and console.log it
    console.log(item, 'could not be added. Basket maximum items reached :(');
    return false; //return a false value as it cannot be done
  } else {
    basket.push(item); //adds item to the basket array
    for (let i = 0; i < basket.length; i++) { //then check if added
      if (basket[i] === item) {
        console.log('Adding', '"', item, '"', 'to your basket!');
        console.log('Your Prime basket inventory: ', basket);
        // console.log confirmation
        return true; //return true
      }
    }
  }
}


function removeItem(item) {
  if (basket.indexOf(item) > -1) { //does the item exist in array
    basket.splice(basket.indexOf(item), 1); //if true, remove item at the index found
    console.log('This item was deleted: '); //console.log confirmation
    return item; // return the item found
  } else {
    console.log(item, 'could not be found in basket.'); //otherwise, let user know not found
    return null;
  }
}


//testing function "addItem" code
console.log(addItem('Lord of the Rings Triology - Blue Ray Edition'));
console.log(addItem('Pantene Shampoo/Conditioner Set'));
console.log(addItem('Doritos Cool Ranch'));
console.log(addItem('Takis'));
console.log(addItem('Dots Pretzels'));
console.log(addItem('The Joy of Painting with Bob Ross 10 DVD Set'));
//testing limit of basket with one exceeding maxItems

function listItems() {
  let counter = 1;
  //function to show all items in basket array
  for (let item in basket) {
    //for reach value in basket array, console.log it
    console.log('Item', counter++, ': ', basket[item]);
  }
}
listItems();
//testing 'listItems' code


function empty() {
  basket.splice(0, basket.length);
  console.log('Emptying basket...');
  if (basket.length === 0) {
    console.log('Basket is empty!'); //deletes all items from index 0 to end of basket
  } //spent some time trying to print 'basket' into the console, but it wouldn't let me
  //after having spent some time on stackoverflow i understand that it's only referenced, can't actually be called
  //bummed out as I'm trying to make it as visually pleasing as possible and convenient for other features
  //I'm probably making this more complicated than needed to be, wanted to have the function be multi-use
}

empty();
//empty the basket

function isFull() {
  return basket.length >= maxItems;
//   if (basket.length >= maxItems) {
//     console.log('Basket is full');
//     return true;
//   }
//   return false;
// }
}

console.log(isFull()); //is it full check code

//code to confirm able use of removeItem function
console.log(addItem('Lord of the Rings Triology - Blue Ray Edition'));
console.log(addItem('Pantene Shampoo/Conditioner Set'));
console.log(addItem('Doritos Cool Ranch'));
console.log(removeItem('Doritos Cool Ranch')); //does it exist, if so prove the function does
console.log(removeItem('Lays Chips')); //check null option
