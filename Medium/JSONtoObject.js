/*Given is a JSON string json. Convert this string into an object and return the parameter title of the created object.*/

function json2Object(json) {
  let jsonObj = JSON.parse(json);
  return jsonObj.title;
}
