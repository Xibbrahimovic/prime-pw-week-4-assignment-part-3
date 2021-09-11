console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create global variable Basket
let basket =[];

function addItem(item, basket){
  basket.push(item);
  //adds item to the basket array
  for(let i = 0; i <basket.length; i++){
    if(basket[i] === item) {
      console.log('Adding','"', item, '"', 'to your basket!');
      console.log('Your Prime basket inventory: ', basket);
      //checking to see if item exists in array (added), if so, return true
    return true;
  }
  }
}

//testing function "addItem" code
addItem('Lord of the Rings Triology - Blue Ray Edition', basket);
addItem('Pantene Shampoo/Conditioner Set', basket);
addItem('Doritos Cool Ranch', basket);

function listItems(){
  //function to show all items in basket array
  for(item in basket){
    //for reach value in basket array, console.log it
    console.log(item);
  }
}

//testing 'listItems' code


function empty(){
  basket.splice(0, basket.length);
  //deletes all items from index 0 upwards
}
