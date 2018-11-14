/*!
 * paws v1.0.2: The theme for pawsnewengland.com
 * (c) 2018 Chris Ferdinandi
 * MIT License
 * http://github.com/pawsnewengland/paws
 * Open Source Credits: https://github.com/toddmotto/fluidvids, http://prismjs.com, https://github.com/filamentgroup/loadJS/, https://github.com/filamentgroup/loadCSS, https://github.com/bramstein/fontfaceobserver
 */

var petSelect = function () {

	'use strict';

	//
	// Variables
	//

	var selects = document.querySelectorAll('[data-asm-pet-select]');
	var sessionID = 'asmPetData';


	//
	// Methods
	//

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

	var createSelectOptions = function (pets, petID) {
		var html = '<option></option>';
		pets.forEach((function (pet) {
			var selected = petID === (pet.name + '::' + pet.sheltercode);
			html += '<option value="' + pet.name + '::' + pet.sheltercode + '"' + (selected ? ' selected="selected"' : '') + '>' + pet.name + '</option>';
		}));
		return html;
	};

	var run = function (pets) {

		// Sort alphabetically
		var petsArr = Array.from(pets);
		petsArr.sort((function (pet1, pet2) {
			if (pet1.name > pet2.name) {
				return 1;
			} else {
				return -1;
			}
		}));

		Array.from(selects).forEach((function (input) {
			var select = document.createElement('select');
			select.id = input.id;
			select.className = input.className;
			select.name = input.name;
			select.title = input.title;
			if (input.required) {
				select.setAttribute('required', 'required');
			}
			select.innerHTML = createSelectOptions(petsArr, input.value);
			input.replaceWith(select);
		}));
	};

	var getPets = function () {

		// If pet data saved in sessionStorage, use that
		var saved = sessionStorage.getItem(sessionID);
		if (saved) {
			run(JSON.parse(saved));
			return;
		}

		// Set up our HTTP request
		var xhr = new XMLHttpRequest();

		// Setup our listener to process compeleted requests
		xhr.onreadystatechange = function () {

			// Only run if the request is complete
			if (xhr.readyState !== 4) return;

			// Process our return data
			if (xhr.status === 200) {
				run(JSON.parse(xhr.responseText));
				sessionStorage.setItem(sessionID, xhr.responseText);
			} else {
				renderError();
			}

		};

		// Create and send a GET request
		// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
		// The second argument is the endpoint URL
		xhr.open('GET', '/api/adoptable-pets.json');
		xhr.send();

	};

	var setPetID = function () {
		var primary = document.querySelector('[data-asm-pet-select="primary"]');
		var petID = getQueryString('pet');
		if (!primary || !petID) return;
		primary.value = petID;
	};


	//
	// Inits
	//

	if (selects.length < 1) return;
	setPetID();
	getPets();

};

petSelect();