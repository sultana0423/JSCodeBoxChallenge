/*Given are two strings correct and wrong. Return all characters that are defective. 
You can recognize defective characters by the fact that they are displayed incorrectly in the string wrong. 
Return an array with their values.*/
//NEEDS UPDATE(CODE NOT COMPLETE)
function keyboardError(correct, wrong) {
  let correctL;
  let wrongL;
  let wrongValues = [];

  if (correct.includes(' ') && wrong.includes(' ')) {
    correctL = correct.split(" ");
    wrongL = wrong.split(" ");
  } else {
    correctL = correct.split("");
    wrongL = wrong.split("");
  }
  
  for (let i = 0; i < correctL.length; i++) {
    if (correctL[i] !== wrongL[i]) {
      wrongValues.push(correctL[i]);
    }
  }

  let wrongValue = [...new Set(wrongValues)];
  return wrongValue;
}

 
