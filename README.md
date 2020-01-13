# 301-practice-3

Questions
In your README.md, write the answers to the following questions. Please state the question in bold text, and the answer beneath it in either normal text or formatted for code.

How long is the array returned by .map()? .filter()?
.map(): same as the length of the original array
.filter():the length will be same or less the original array depends on the condition 

What does the following code do:

$('button#primary').on('click', function() {
  placeOrder(shoppingCartItems);
});

this is jquery code do the following : find a button with id='primary' and after that invoke function 
placeOrder with argument shoppingCartItems if user clicks on this button

Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.

let namesOfArray=['muna','khalid', 'omar','ahmad'];

function namesToUpperCase(array){
 let tempArray=array.map(name=>{return name.toUpperCase()})
return tempArray;
}

console.log(namesToUpperCase(namesOfArray));