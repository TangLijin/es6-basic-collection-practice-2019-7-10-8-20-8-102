'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  let keyListOfA = [];
  collectionA.forEach(element => {
      keyListOfA.push(element.key);
  });
  keyListOfA.forEach(element => {
    if(objectB.value.includes(element)){
      result.push(element);
    }
  });
  return result;
}
