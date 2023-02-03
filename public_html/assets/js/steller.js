/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
	$(".nav-link").on('click', function (event) {

		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function () {
				window.location.hash = hash;
			});
		}
	});
});


let mode = document.getElementById('mode')
mode.addEventListener('click', () => {
	mode.classList.toggle('active')
	document.getElementById('logo').classList.toggle('dark')
	document.getElementById('navbar').classList.toggle('dark')
	document.getElementById('home').classList.toggle('dark')
	document.getElementById('img-hold').classList.toggle('dark')
})


