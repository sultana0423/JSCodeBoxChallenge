/*Given is a string item, with an item and a price in brackets. Return the price.*/

function getPrice(item) {
 let startIndex = item.indexOf('($');
    if (startIndex !== -1) {
        let endIndex = item.indexOf(')', startIndex);
        if (endIndex !== -1) {
            return "$" +  item.substring(startIndex + 2, endIndex);
        }
    }
    return null;
}
