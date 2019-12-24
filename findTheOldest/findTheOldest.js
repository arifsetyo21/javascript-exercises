let findTheOldest = function(peopleObject) {
   let yearNow = new Date().getFullYear();
   let orderedPeople = peopleObject.sort(function(a, b) {
      return (
         ((a.yearOfDeath != undefined) ? (a.yearOfDeath - a.yearOfBirth) : (yearNow - a.yearOfBirth)) - 
         ((b.yearOfDeath != undefined) ? (b.yearOfDeath - b.yearOfBirth) : (yearNow - b.yearOfBirth))
      )
   })

   /* console.log('typeof peopleObject : ' + typeof peopleObject)
   console.log('typeof orderedPeople : ' + typeof orderedPeople) */
   // console.log(orderedPeople.pop())
   return orderedPeople.pop()
}

module.exports = findTheOldest
