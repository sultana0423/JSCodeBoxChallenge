/*The string greeting is given. 
Output this string in a HTML p tag and color the font green if greeting contains the word 'Hi' and blue if greeting contains the word 'Hello'. 
if both occur, the word turns red. Print the content into the body tag.*/

function headline2(greeting) {
  let paragraph = document.createElement("p");
 paragraph.innerText = greeting;
 document.body.appendChild(paragraph);
 
 if (greeting.indexOf('Hi') >= 0 && greeting.indexOf('Hello') < 0) {
     paragraph.style.color = 'green';
 } else if (greeting.indexOf('Hello') >= 0 && greeting.indexOf('Hi') < 0) {
     paragraph.style.color = 'blue';
 } else if (greeting.indexOf('Hi') >= 0 && greeting.indexOf('Hello') >= 0) {
     paragraph.style.color = 'red';
 }
}
