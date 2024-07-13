/*Given is an object obj each with two properties (name & category) of type String. Return the value of the property with the longer string. 
If both are of equal length, return the value of the name property.*/

function theGround(obj) {
   if (obj.name.length > obj.category.length) {
    return obj.name;
  } else if (obj.category.length > obj.name.length) {
    return obj.category;
  } else {
    return obj.name;
  }
}
