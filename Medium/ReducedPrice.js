/*Given is a number price and a number discount. Return the calculated discounted price. Round to two decimal places.*/

function getReducedPrice(price, discount) {
  
  return parseFloat((price - (discount / 100 * price)).toFixed(2));
}
