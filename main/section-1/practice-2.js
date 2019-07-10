'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach(element => {
    if(collectionB[0].includes(element)){
      result.push(element);
    }
});
  return result;
}
