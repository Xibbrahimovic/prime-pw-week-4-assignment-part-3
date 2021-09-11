console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create global variable Basket
let basket =[];
const maxItems = 5;//max items variable

function addItem(item, arr){
  arr.push(item);
  //adds item to the basket array
  for(let i = 0; i <arr.length; i++){
    if(basket[i] === item) {
      console.log('Adding','"', item, '"', 'to your basket!');
      console.log('Your Prime basket inventory: ', arr);
      //checking to see if item exists in array (added), if so, return true
    return true;
  }
  }
}

//testing function "addItem" code
console.log(addItem('Lord of the Rings Triology - Blue Ray Edition', basket));
console.log(addItem('Pantene Shampoo/Conditioner Set', basket));
console.log(addItem('Doritos Cool Ranch', basket));

function listItems(arr){
  let counter = 1;
  //function to show all items in basket array
  for(item in arr){
    //for reach value in basket array, console.log it
    console.log('Item', counter++, ': ' ,arr[item]);
  }
}

listItems(basket);
//testing 'listItems' code

function empty(array){
  array.splice(0, array.length);
  console.log('Emptying array...');
  if(array.length === 0){
    console.log('Array is empty!');  //deletes all items from index 0 to end of basket
  } //spent some time trying to print 'basket' into the console, but it wouldn't let me
  //after having spent some time on stackoverflow i understand that it's only referenced, can't actually be called
  //bummed out as I'm trying to make it as visually pleasing as possible and convenient for other features
 //I'm probably making this more complicated than needed to be, wanted to have the function be multi-use
}

empty(basket);
//empty the basket
