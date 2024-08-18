/*Given is an array words with words. Return the longest word of the array. Return 'Foobar' if the two longest words have the same length.*/

function longestWord(words) {
   let longestWord = '';
    let secondLongestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            secondLongestWord = longestWord;
            longestWord = word;
        } else if (word.length > secondLongestWord.length) {
            secondLongestWord = word;
        }
    }

    return longestWord.length === secondLongestWord.length ? 'Foobar' : longestWord;
}
