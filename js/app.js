//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
// var $image = $("<img>");
var $caption = $('<p id="caption">HIIIIII</p>');

$overlay.append($caption);

$(".special").append($overlay);




// $("div[class |= 'special']").hover(function() {
//   //Hide the overlay
//   $overlay.toggle();
// });






