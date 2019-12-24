const palindromes = function(string) {
   let array = string.split('');
   let filtered = array.filter(function(char) {
      return char.match(/^[A-Za-z]+$/);
   })

   // console.log(filtered.join('').toLowerCase() === filtered.reverse().join('').toLowerCase());
   return (filtered.join('').toLowerCase() === filtered.reverse().join('').toLowerCase()) ? true : false;
}

module.exports = palindromes
