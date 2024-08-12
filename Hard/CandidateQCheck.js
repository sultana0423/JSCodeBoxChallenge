/*Given is an array times and a number totalTime. The array times contains 
the time taken by a candidate to solve each question in an imaginary coding interview, 
and totalTime is the total time taken by the candidate to complete the interview.*/

/*The interview has the following criteria:
The interview contains 8 questions in the order: easy, easy, easy, medium, medium, medium, hard, hard.
The maximum allowed time for the entire interview, including a buffer time, is 140 minutes.*/

/*The maximum time allowed for each question is as follows:
Easy questions: 10 minutes each.
Medium questions: 15 minutes each.
Hard questions: 20 minutes each.*/

/*The function should return "qualified" if the candidate meets all the criteria.
Otherwise, it should return "disqualified".*/

function isQualified(times, totalTime) {
   const maxTimes = [10, 10, 10, 15, 15, 15, 20, 20];
    const maxTotalTime = 140;

    for (let i = 0; i < times.length; i++) {
        if (times[i] > maxTimes[i]) {
            return 'disqualified';
        }
    }

    if (totalTime <= maxTotalTime) {
        return 'qualified';
    } else {
        return 'disqualified';
    }
}




 
//   function isQualified(times, totalTime) {
     
//     let totalMaxE = 30;
//     let totalMaxM = 45;
//     let totalMaxH = 40;
    
//     let easyArray = times.slice(0,3);
//     let medArray = times.slice(3,6);
//     let hardArray = times.slice(6);
    
//     const easySum = (array) => {
//     let easyTotal = 0;
//     for (let i = 0; i < array.length; i++) {
//         easyTotal += array[i];
//     }
//     return easyTotal;
// };
//     const medSum = (array) => {
//     let medTotal = 0;
//     for (let i = 0; i < array.length; i++) {
//         medTotal += array[i];
//     }
//     return medTotal;
// };
//     const hardSum = (array) => {
//     let hardTotal = 0;
//     for (let i = 0; i < array.length; i++) {
//         hardTotal += array[i];
//     }
//     return hardTotal;
// };

//     let passedEasy = easySum(easyArray) <= totalMaxE;
//     let passedMed = medSum(medArray) <= totalMaxM;
//     let passedHard = hardSum(hardArray) <= totalMaxH;
//     let passed = passedEasy && passedMed && passedHard;
    
//   if ( passed === true && totalTime <= 140) {
//       return 'qualified';
//     }  else if (passed === false && totalTime <= 140) {
//       return 'disqualified';
//     }  else {
//     return 'disqualified';
//     }
    
    
// }
