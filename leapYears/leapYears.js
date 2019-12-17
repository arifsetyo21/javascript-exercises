const leapYears = function(params) {
   if (((params % 100) == 0) && (params % 400) == 0) {
      return true;
   } else if ((params % 100) == 0) {
      return false;
   } else {
      return ((params % 4) > 0) ? false : true;
   }
}

module.exports = leapYears
