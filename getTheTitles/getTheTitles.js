const getTheTitles = function(bookObject) {
   return bookObject.map(function(book) {
      return book.title
   })
}

module.exports = getTheTitles;
