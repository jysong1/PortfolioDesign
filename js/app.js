
var $overlay = $('<div id="overlay"></div>');
var $caption = $('<p></p>');


//======= Gallery Menu button animation ========//
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


