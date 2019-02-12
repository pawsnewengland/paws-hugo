var petSelect = function (selector) {

	'use strict';

	// Get the selecto menu
	var select = document.querySelector(selector);

	/**
	 * Get the value of a query string from a URL
	 * @param  {String} field The field to get the value of
	 * @param  {String} url   The URL to get the value from [optional]
	 * @return {String}       The value
	 */
	var getQueryString = function (field, url) {
		var href = url ? url : window.location.href;
		var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
		var string = reg.exec(href);
		return string ? decodeURIComponent(string[1]) : null;
	};

	// If there's a default value, set it
	if (!select) return;
	var pet = getQueryString('pet');
	console.log(select);
	console.log(decodeURIComponent(pet));
	if (!pet) return;
	select.value = decodeURIComponent(pet);

};