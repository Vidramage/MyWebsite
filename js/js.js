$('a[href*=#contactme]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    event.preventDefault();
});
$('a[href*=#about]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    event.preventDefault();
});
$('a[href*=#portfolio]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    event.preventDefault();
});

$('#back-to-top').click(function(event) {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});