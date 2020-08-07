
function myFunction() {
    document.getElementById("frm1").submit();
  }
console.log(greeting)
console.log(dinerArray);

function menuInstructions(menuChoice, sideOne, sideTwo)  {

var menuSelection = prompt('Please type your entree choice');


console.log(('Perfect! Your entree comes with two sides. Please select your sides from the side dish'));

const sides = [
    'fries',
    'onion rings',
    'salad',
    'soup',
    'baked potato'
]
    
console.log(sides);
subTotal = 12;
console.log('Alrighty, your subtotal will be ' + (subTotal));
total = subTotal + 2;
console.log('You ordered ' + (menuChoice) + ' with ' + (sideOne) + ' and ' + (sideTwo) + ' which brings your total to ' + (total));

};


menuInstructions('Hamburger', 'fries', 'salad');

console.log ('Thank you for visitng the Bottega Diner! Please enjoy your order and have a great day!');

var sideMessage = alert('Great choice!' + (fname) + ' Your entree comes with two sides. Please select your sides from the menu below');