const repeatString = function(string, times) {
   
   if (parseInt(times) >= 0) {   

      const element = [];
      for (let i = 0; i < times; i++) {
         element[i] = string;
      }
      
      return element.join('');
   } else {
      return 'ERROR';
   }

}

module.exports = repeatString
