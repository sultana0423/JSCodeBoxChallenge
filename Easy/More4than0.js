/*Given is an array n with integers. Return true if it contains more four than zero.*/

function more4than0(n) {
  let count4 = 0;
  let count0 = 0;

  for (let i = 0; i < n.length ; i++) {
    if (n[i] === 4) {
      count4 +=1;
    } else if (n[i] === 0) {
      count0 += 1;
    } 
  }

  return count4 > count0 ;
}
