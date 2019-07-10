'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(element => {
    if(objectB.value.includes(element)){
      result.push(element);
    }
  });
  return result;
}
