(function () {

	// Source:
	// https://gomakethings.com/how-to-add-transition-animations-to-vanilla-javascript-show-and-hide-methods/

	// Show an element
	var show = function (elem) {

		// Get the natural height of the element
		var getHeight = function () {
			elem.style.display = 'block'; // Make it visible
			var height = elem.scrollHeight + 'px'; // Get it's height
			elem.style.display = ''; //  Hide it again
			return height;
		};

		var height = getHeight(); // Get the natural height
		elem.classList.add('is-visible'); // Make the element visible
		elem.style.height = height; // Update the max-height

		// Once the transition is complete, remove the inline max-height so the content can scale responsively
		window.setTimeout(function () {
			elem.style.height = '';
		}, 350);

	};

	// Hide an element
	var hide = function (elem) {

		// Give the element a height to change from
		elem.style.height = elem.scrollHeight + 'px';

		// Set the height back to 0
		window.setTimeout(function () {
			elem.style.height = '0';
		}, 1);

		// When the transition is complete, hide it
		window.setTimeout(function () {
			elem.classList.remove('is-visible');
		}, 350);

	};

	// Toggle element visibility
	var toggle = function (element, cssClass) {

		// If the element is visible, hide it
		if (element.classList.contains(cssClass)) {
			element.classList.remove(cssClass);
			return;
		}

		// Otherwise, show it
		element.classList.add(cssClass);

	};


	document.addEventListener('DOMContentLoaded', function(){
		if((elements = document.getElementsByClassName("toggle-class")) !== null) {
			var i;
			for (i = 0; i < elements.length; i++) {
				(function () {

			    var element = elements[i];

			    element.addEventListener('click', function () {
			    	var dataset = element.dataset;

			    	if (dataset.tag) {
			    		var content = document.querySelector(dataset.tag);
			    		if (!content) return;

			    		// Toggle the content
			    		toggle(content, dataset.class);
			    	}
			    });

				})();
			}
		}
	});

})();
