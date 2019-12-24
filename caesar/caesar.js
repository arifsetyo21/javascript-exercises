const caesar = function(string, number) {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
   let alphabetCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   let array = string.split('')
   let caesar_chiper = [];

   array.forEach(char => {
      if (char == char.toLowerCase() && char.match(/^[A-Za-z]+$/)) {
         let index = alphabet.indexOf(char);
         caesar_chiper.push(alphabet[mod((index + number), 26 )])
      } else if (char == char.toUpperCase() && char.match(/^[A-Za-z]+$/)) {
         let index = alphabetCaps.indexOf(char);
         caesar_chiper.push(alphabetCaps[mod((index + number), 26 )])
         /* console.log('index : ' + index) */
      } else {
         caesar_chiper.push(char)
      }
      /* console.log(caesar_chiper) */
   });

   return caesar_chiper.join('')


   /* NOTE 
   1. cek inputan berada diindex ke berapa
   2. tambah index dengan key number
   3. mod penambahan
   4. return hasil dengan index string alphabet
   5. cari huruf berdasarkan index dan besar kecilnya
   6. Jadikan string
    */
   function mod(n, m) {
      return ((n % m) + m) % m;
   }
}

module.exports = caesar
