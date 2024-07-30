/*Write a JavaScript function that calculates the average grade of a student based on the scores they achieved in different subjects. 
Given is the array scores. Return the calculated average rounded to two decimal places. The length of the array will be at least 1.*/

function calculateAverageGrade(scores) {
   let sumOfValue = 0;
   let numOfValue = scores.length;
 for (let i = 0; i < scores.length; i++) {
     sumOfValue += scores[i];
 }
 let aveg = sumOfValue / numOfValue;

  return Math.round(aveg * 100) / 100;
}
