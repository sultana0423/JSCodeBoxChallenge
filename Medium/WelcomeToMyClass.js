/*Given is a string className. Create a p element which has className as class and className as content. 
In the output, the first letter should be displayed in capital letters. 
Append the created element to the body tag.*/

function welcomeToMyClass(className) {
   let p = document.createElement('p');
   p.classList.add(className);
   p.innerText = `${className.charAt(0).toUpperCase() + className.slice(1)}`;
   document.body.appendChild(p);
}  
