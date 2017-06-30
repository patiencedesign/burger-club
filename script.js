$(document).ready(function() {
	$('#burgerCarousel').carousel()
	$('#signupButton').click(function() {
		$('#userName').val()
		$('#userEmail').val()
		$('.modal-body').append()
	})
	$('#signupButton').click(function() {
		alert('Hey, ' + $('#userName').val() + ' thank you for contacting us! We will get back to ' + $('#userEmail').val() + ' shortly!');
	})
	$('#email').click(function() {
		$('#form').val()
	})
	$('#email').click(function() {
		window.location.href = 'http://formspree.io/YOUREMAILHERE'
	})
	$("button").click(function() {
		$.getJSON("https://api.twitter.com/1.1/statuses/user_timeline.json", function(result) {
			$.each(result, function(i, field) {
				$("div").append(field)
			})
		})
	})
});