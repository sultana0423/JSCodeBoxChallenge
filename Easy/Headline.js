/* Given is a text headline. Write this string in a h1 HTML tag and append it to the HTML body.*/

function printHeadline(headline) {
  let h1 = document.createElement("h1");
  h1.innerHTML = headline;
  document.body.appendChild(h1);
}
