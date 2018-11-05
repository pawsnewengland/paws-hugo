var petListingsFilter = function () {

	'use strict';

	//
	// Variables
	//

	var allPets = document.querySelectorAll('[data-asm-attribute]');
	var breedFilters = document.querySelectorAll('[data-asm-sort-type="breeds"]');
	var attributeFilters = document.querySelectorAll('[data-asm-sort-type="attribute"]');
	var sessionID = 'asmFilterState';


	//
	// Methods
	//

	var hidePets = function (pets) {
		Array.from(pets).forEach(function (pet) {
			pet.setAttribute('hidden', 'hidden');
		});
	};

	var showPets = function (pets) {
		Array.from(pets).forEach(function (pet) {
			pet.removeAttribute('hidden');
		});
	};

	var filterPets = function () {

		// Hide all pets
		hidePets(allPets);

		// Toggle breeds
		Array.from(breedFilters).forEach(function (breed) {
			var pets = document.querySelectorAll('[data-asm-attribute*="' + breed.getAttribute('data-asm-sort-target') + '"]');
			if (breed.checked === true) {
				showPets(pets);
			}
		});

		// Toggle all other attributes
		Array.from(attributeFilters).forEach(function (att) {
			var pets = document.querySelectorAll('[data-asm-attribute*="' + att.getAttribute('data-asm-sort-target') + '"]');
			if (att.checked === false) {
				hidePets(pets);
			}
		});

	};

	var toggleAllCheckboxes = function (checkbox) {
		Array.from(breedFilters).forEach(function (filter) {
			filter.checked = checkbox.checked;
		});
	};

	var saveState = function (checkbox, toggleAll) {

		// Only run if sessionStorage is supported
		if (!window.sessionStorage) return;

		// Get currently saved
		// var state = sessionStorage.getItem(sessionID);
		// state = state ? JSON.parse(state) : {};
		var state = {};

		// Update state
		Array.prototype.filter.call(document.querySelectorAll('[data-asm-sort-type]'), function (checkbox) {
			state[checkbox.getAttribute('data-asm-sort-target')] = checkbox.checked;
		});

		// Save updated state
		sessionStorage.setItem(sessionID, JSON.stringify(state));

	};

	var loadState = function () {

		// Only run if sessionStorage is supported
		if (!window.sessionStorage) return;

		// Get currently saved
		var state = sessionStorage.getItem(sessionID);
		if (!state) return;
		state = JSON.parse(state);

		// Restore state
		Object.keys(state).forEach(function (key) {
			var filter = document.querySelector('[data-asm-sort-target="' + key + '"]');
			if (!filter) return;
			filter.checked = state[key];
		});

	};

	var toggleFilters = function () {
		var filters = document.querySelector('#asm-filters');
		if (!filters) return;
		filters.classList.toggle('is-visible');
		if (filters.classList.contains('is-visible')) {
			filters.setAttribute('tabindex', '-1');
			filters.focus();
		}
	};

	var clickHandler = function (event) {

		// If toggle button, toggle filters
		if (event.target.closest('[data-asm-filters-toggle]')) {
			toggleFilters();
			return;
		}

		// Only run on sort filters
		var checkbox = event.target.closest('[data-asm-sort-target]');
		if (!checkbox) return;

		// If toggle all checkbox
		if (checkbox.getAttribute('data-asm-sort-type') === 'toggle-all') {
			toggleAllCheckboxes(checkbox);
		}

		// Filter pet listings
		filterPets();

		// Save state
		saveState(checkbox);

	};


	//
	// Inits
	//

	// Add class hook
	document.documentElement.classList.add('asm-pet-listings-filter-loaded');

	// Listen for clicks
	document.documentElement.addEventListener('click', clickHandler, false);

	// Load state from session storage
	loadState();

	// Filter pet listings
	filterPets();

};