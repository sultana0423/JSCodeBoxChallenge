/*The variables start and end are given. Return an array with the contents of the individual numbers. 
Replace all numbers divisible by three with "Fizz" and all numbers divisible by five with "Buzz". 
If a number is divisible by five and three replace it by "FizzBuzz".*/

function fizzBuzz(start, end) {
  let nums = [];
  let fizzBuzz = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
   for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
        fizzBuzz.push('FizzBuzz');
    } else if (nums[i] % 5 === 0) {
        fizzBuzz.push('Buzz');
    } else if (nums[i] % 3 === 0) {
        fizzBuzz.push('Fizz');
    } else {
        fizzBuzz.push(nums[i].toString());
    }
   }

   return fizzBuzz;
}
