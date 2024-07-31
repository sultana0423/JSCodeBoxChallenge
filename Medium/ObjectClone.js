/*Given is an object object. Return a clone of the object except the object properties given in the array removeProperties.*/

function cloneObject(object, removeProperties) {
   return Object.keys(object).reduce((acc, key) => {
        if (!removeProperties.includes(key)) {
            acc[key] = object[key];
        }
        return acc;
    }, {});
}
