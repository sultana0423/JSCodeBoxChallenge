/*Given is a number max representing the maximum number of groups in the queue. 
You also have an array visitors of people, where 'X' stands for one person and 'O' for one companion. 
A group is minimum one 'O' and any number of 'X'. Check if all groups fit into the queue. Return 'full' if all fit. 
Otherwise, return the number of groups that are too many or not full.*/

function cinemaQueue(max, visitors) {
  let xCount = 0;
  for (let i = 0 ; i < visitors.length; i++) {
     if (visitors[i] === 'X') {
         xCount += 1;
     }
 }

  if (xCount == max) {
    return 'full';
  } else if (xCount > max) {
    let tooMuch = xCount - max;
    return `too much: ${tooMuch}`;
  } else if (xCount < max) {
    let notFull = max - xCount;
    return `not full: ${notFull}`
  }
}
