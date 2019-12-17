const sumAll = function(...params) {
   /* NOTE Only take index 0 and 1 */
   params.slice(1);
   /* NOTE Sorthand sorting array in ES6 */
   params.sort((a, b) => a - b)
   /* NOTE Validate integer*/
   if (Number.isInteger(params[0]) && Number.isInteger(params[1])) {   
      let result = 0;
      for ( let i = params[0]; i <= params[1]; ++i) {
         result += i;
      }
      return (result < 0) ? 'ERROR' : result;
   } else {
      return 'ERROR';
   }

}

module.exports = sumAll
