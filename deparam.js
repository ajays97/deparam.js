/**
 * jQuery.deparam - The inverse of jQuery's $.param(). Takes a parameterized query string and converts into an object.
 *
 * Regex Credits: Steven Benner
*/
(function($){
  $.deparam = $.deparam || function(pString){
    if(pString === undefined){
      pString = window.location.search;
    }
    var dString = {};
    pString.replace(
      new RegExp(
        "([^?=&]+)(=([^&#]*))?", "g"),
        function($0, $1, $2, $3) {
        	dString[$1] = decodeURIComponent($3.replace(/\+/g, '%20'));
        }
      );
      return dString;
    };
})(jQuery);
