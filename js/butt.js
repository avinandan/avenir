var portfolio, span, text, time;

var leave = function() {
	var period = new Date() - time;
	if (period > 200) {
		span.style.webkitTransitionDelay = '0.2s, 0.2s, 0, 0';
		span.style.mozTransitionDelay = '0.2s, 0.2s, 0, 0';
		span.style.msTransitionDelay = '0.2s, 0.2s, 0, 0';
		span.style.oTransitionDelay = '0.2s, 0.2s, 0, 0';
		span.style.transitionDelay = '0.2s, 0.2s, 0, 0';
	}
	if (period > 400) {
		text.style.webkitTransition = 'opacity 0.2s ease';
		text.style.mozTransition = 'opacity 0.2s ease';
		text.style.msTransition = 'opacity 0.2s ease';
		text.style.oTransition = 'opacity 0.2s ease';
		text.style.transition = 'opacity 0.2s ease';
		span.style.webkitTransitionDelay = '0.4s, 0.4s, 0.2s, 0.2s';
		span.style.mozTransitionDelay = '0.4s, 0.4s, 0.2s, 0.2s';
		span.style.msTransitionDelay = '0.4s, 0.4s, 0.2s, 0.2s';
		span.style.oTransitionDelay = '0.4s, 0.4s, 0.2s, 0.2s';
		span.style.transitionDelay = '0.4s, 0.4s, 0.2s, 0.2s';
	}
	return false		
}

var enter = function() {
	time = new Date();			
	span.removeAttribute('style');
	text.removeAttribute('style');
	return false		
}

var init = function() {
	portfolio = document.getElementById('portfolio');
	span = portfolio.getElementsByTagName('span')[0];
	text = portfolio.getElementsByTagName('b')[0];		
	
	portfolio.addEventListener('mouseenter', enter, false);
	portfolio.addEventListener('mouseleave', leave, false);		
}

window.addEventListener('load', init, false);
