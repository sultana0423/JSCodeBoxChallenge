/*Given is a string n. The task is to return the sentence in CamelCase notation. 
This means that each new word is capitalized and immediately appended to the old word. 
Start with a lowercase letter.*/

function camelCase(n) {
  if (!n.includes(' ')) {
        return n[0].toLowerCase() + n.slice(1);
    }

    let stringA = n.split(' ').filter(word => word.length > 0);
    let stringB = '';

    for (let i = 0; i < stringA.length; i++) {
        if (i === 0) {
            stringB += stringA[i].toLowerCase();
        } else {
            stringB += stringA[i][0].toUpperCase() + stringA[i].slice(1).toLowerCase();
        }
    }

    return stringB;
}
