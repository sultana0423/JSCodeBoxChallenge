/*A string minutes is given. Return a string with the converted time in the format hh:mm.*/

function timeConvert(minutes) {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}
