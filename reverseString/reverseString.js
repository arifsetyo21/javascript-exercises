const reverseString = function(string) {
   let reverseWord = [];
   let words = string.split('');
   let i = words.length-1;

   words.forEach(char => {
      reverseWord[i] = char;
      i--;
   });

   return reverseWord.join('');

}

module.exports = reverseString
