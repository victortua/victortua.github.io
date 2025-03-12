
// David Gilbertson - "The only way to detect touch with JavaScript" (Aug 13, 2016)
// https://medium.com/@david.gilbertson/the-only-way-to-detect-touch-with-javascript-7791a3346685

// window.addEventListener('touchstart', function onFirstTouch() {
	//add class to the body
	// document.body.classList.add('touchdetected');
	// we only need to know once that a human touched the screen, so we can stop listening now
	// window.removeEventListener('touchstart', onFirstTouch, false);
	// }, false);





window.addEventListener('touchstart', function () {
	// document.body.classList.remove('mousedetected');
	//add class to the body
	document.body.classList.add('touchdetected');
	// we only need to know once that a human touched the screen, so we can stop listening now
	window.removeEventListener('touchstart', false);
	}, false);

window.addEventListener('mousemove', function() {
	//add class to the body
	document.body.classList.add('mousedetected');
	// we only need to know once that a human touched the screen, so we can stop listening now
	window.removeEventListener('mousemove', false);
	}, false);






window.addEventListener('touchstart', function () {
	document.body.classList.remove('mousedetected');
	// add class to the body
	document.body.classList.add('touchdetected');
	// we only need to know once that a human touched the screen, so we can stop listening now
	window.removeEventListener('touchstart', false);
	}, false);

window.addEventListener('mousemove', function () {
	//add class to the body
	document.body.classList.add('mousedetected');
	// we only need to know once that a human touched the screen, so we can stop listening now
	window.removeEventListener('mousemove', false);
	}, false);

