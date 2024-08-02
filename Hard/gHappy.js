/*A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy.*/

function gHappy(string) {
     if (string.length === 0) {
        return false;
    }
  for (let i = 0; i < string.length; i++) {
        if (string[i] === 'g') {
            if ((i > 0 && string[i - 1] === 'g') || (i < string.length - 1 && string[i + 1] === 'g')) {
              
                continue;
            } else {
                 
                return false;
            }
        }
    }
    return true;
}
