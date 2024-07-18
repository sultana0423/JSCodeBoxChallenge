/*A variable pali is given. Return true if it is a palindrome. Otherwise false. 
A palindrome is a word that is read forward and backward, resulting in the same word.*/

function palindrome(pali) {
  let stringR=  pali.split('').reverse().join('');
  return pali === stringR;
}
