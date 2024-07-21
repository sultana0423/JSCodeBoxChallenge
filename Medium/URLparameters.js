/*A string url is given. Return the parameter values in an array. The keys can be ignored.*/

function getURLParams(url) {
   let anchor = document.createElement('a');
    anchor.href = url;
    let queryString = anchor.search.substring(1);
    let keyValuePairs = queryString.split('&');
    let values = keyValuePairs.map(pair => pair.split('=')[1]);
    return values;
}
