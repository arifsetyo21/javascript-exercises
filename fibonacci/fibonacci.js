const fibonacci = function(number) {
   if (number < 0) {
      return 'OOPS'
   }
   let oldResult = 0
   let newResult = 1
   for (let i = 1; i < number; i++) {

      let newValue = newResult + oldResult
      /* console.log(newValue) */
      oldResult = newResult
      // console.log('old result : ' + oldResult)
      newResult = newValue
      // console.log('new result : ' + newResult)
   }

   return newResult
}

/* NOTE 
1. ambil angka pertama
2. jumlahkan angka pertama dengan jumlah angka pertama dengan kedua
3. ulangi sampai angka yang ditentukan
4. ambil angka terakhir

 */

module.exports = fibonacci
