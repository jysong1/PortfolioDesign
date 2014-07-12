//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $caption = $('<p></p>');

//add caption to overlay
$overlay.append($caption);


//caption event on hovering gallery image
$(".gallery-menu a").hover(function() {

	$(this).append($overlay);
	$(overlay).fadeIn(200);

	var captionText = $(this).children("div").children("img").attr("alt");
	$caption.text(captionText);
}, function() {
	$(overlay).toggle();
});
