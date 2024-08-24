/*A String string is given. Return the number of the word "Me" in this string. Count 'Me' only if none 'x' is anywhere in front of it.*/
function countMe(string) {
   let count = 0;
    const words = string.split("Me");

    for (let i = 0; i < words.length - 1; i++) {
        if (!words[i].includes("x")) {
            count++;
        }
    }

    return count;
}
