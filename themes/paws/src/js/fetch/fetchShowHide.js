var fetchShowHide = function () {

	'use strict';

	var toggle = function (elem) {
		elem.classList.toggle('active');
		if (elem.classList.contains('active')) {
			elem.setAttribute('tabindex', '-1');
			elem.focus();
		}
	};

	var clickHandler = function (event) {
		if (!event.target.closest('[data-fetch-filters-toggle]')) return;
		var filters = document.querySelector('#fetch-filters');
		if (!filters) return;
		toggle(filters);
	};

	document.documentElement.addEventListener('click', clickHandler, false);

};