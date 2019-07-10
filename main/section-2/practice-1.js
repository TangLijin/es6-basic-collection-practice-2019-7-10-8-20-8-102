'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
  //collection.sort();
  let temp = {};
  let firstPlace = 0;
  let lastPlace = 0;
  let currentNumber = collection[0];

  while(lastPlace < collection.length - 1){
    firstPlace = collection.indexOf(currentNumber);
    lastPlace = collection.lastIndexOf(currentNumber);
    temp.key = currentNumber;
    temp.count = lastPlace - firstPlace + 1;
    result.push(temp);
    temp = {};

    currentNumber = collection[lastPlace + 1];
  }
  console.log(result);
  return result;

}
