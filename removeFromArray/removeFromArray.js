const removeFromArray = function(array, ...params) {
   let key;
   params.forEach( function(wordToRemove) {
      while (array.indexOf(wordToRemove) != -1) {
         key = array.indexOf(wordToRemove);
         /* NOTE param 1 : mulai di splice pada index berapa, param 2 : berapa value index yang akan displice  */
         array.splice(key, 1)
      }
   });

   return array;
}

module.exports = removeFromArray