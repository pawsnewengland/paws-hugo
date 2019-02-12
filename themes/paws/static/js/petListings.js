/*!
 * paws v1.4.3
 * The theme for pawsnewengland.com
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/pawsnewengland/paws
 */

var petListingsCreateFilters = function () {

	'use strict';

	//
	// Variables
	//

	var app = document.querySelector('[data-pet-listing-filters]');
	if (!petListingData) return;
	var pets = JSON.parse(JSON.stringify(petListingData));


	//
	// Methods
	//

	var propify = function (str) {
		return str.replace(/ /g, '-').toLowerCase();
	};

	var getSizes = function () {
		var sizes = [];
		if (pets.find((function (pet) { return pet.size === 'Small' }))) sizes.push('Small');
		if (pets.find((function (pet) { return pet.size === 'Medium' }))) sizes.push('Medium');
		if (pets.find((function (pet) { return pet.size === 'Large' }))) sizes.push('Large');
		if (pets.find((function (pet) { return pet.size === 'Very Large' }))) sizes.push('Very Large');
		return sizes;
	};

	var getAges = function () {
		var ages = [];
		if (pets.find((function (pet) { return pet.age === 'Baby' }))) ages.push('Baby');
		if (pets.find((function (pet) { return pet.age === 'Young' }))) ages.push('Young');
		if (pets.find((function (pet) { return pet.age === 'Adult' }))) ages.push('Adult');
		if (pets.find((function (pet) { return pet.age === 'Senior' }))) ages.push('Senior');
		return ages;
	};

	var getGenders = function () {
		var genders = [];
		if (pets.find((function (pet) { return pet.sex === 'Male' }))) genders.push('Male');
		if (pets.find((function (pet) { return pet.sex === 'Female' }))) genders.push('Female');
		return genders;
	};

	var getBreeds = function () {
		var breeds = [];
		pets.forEach((function (pet) {
			pet.breeds.forEach((function (breed) {
				if (breeds.indexOf(breed) === -1) {
					breeds.push(breed);
				}
			}));
		}));
		return breeds.sort();
	};

	// change type to isBreeds
	var createFilterLabel = function (att, val, type) {
		var html =
			'<label>' +
				'<input type="checkbox" data-asm-sort-type="' + type + '" data-asm-sort-target="' + propify(att) + '_' +  propify(val) + '" checked="checked"> ' +
				val +
			'</label>';
		return html;
	};

	var createFilterHTML = function (atts, heading, all) {
		var html = '<h2>' + heading + '</h2>';
		var attName = heading.toLowerCase();
		var type = attName === 'breeds' ? attName : 'attribute';
		if (all) {
			html += createFilterLabel('toggle-all', 'Toggle All', 'toggle-all');
		}
		atts.forEach((function (att) {
			html += createFilterLabel(attName, att, type);
		}));
		return html;
	};

	var createOptionsFilterHTML = function () {
		var html = '<h2>Other Options</h2>';
		html += createFilterLabel('options', 'No Dogs', 'attribute');
		html += createFilterLabel('options', 'No Cats', 'attribute');
		html += createFilterLabel('options', 'No Kids', 'attribute');
		html += createFilterLabel('options', 'Special Needs', 'attribute');
		return html;
	};

	var createFilters = function (pets) {

		// Variables
		var sizes = getSizes(pets);
		var ages = getAges(pets);
		var genders = getGenders(pets);
		var breeds = getBreeds(pets);

		// Create filter HTML
		var html =
			createFilterHTML(sizes, 'Sizes') +
			createFilterHTML(ages, 'Ages') +
			createFilterHTML(genders, 'Genders') +
			createFilterHTML(breeds, 'Breeds', true) +
			createOptionsFilterHTML();

		// Add wrapper and toggle button
		html =
			'<div class="asm-filters margin-bottom" id="asm-filters">' + html + '</div>' +
			'<div class="asm-filters-toggle"><p><button class="btn" data-asm-filters-toggle>Filter Results</button></p></div>';

		return html;

	};

	//
	// Inits
	//

	if (!app || !pets) return;
	app.innerHTML = createFilters();

};
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
		Array.from(pets).forEach((function (pet) {
			pet.setAttribute('hidden', 'hidden');
		}));
	};

	var showPets = function (pets) {
		Array.from(pets).forEach((function (pet) {
			pet.removeAttribute('hidden');
		}));
	};

	var filterPets = function () {

		// Hide all pets
		hidePets(allPets);

		// Toggle breeds
		Array.from(breedFilters).forEach((function (breed) {
			var pets = document.querySelectorAll('[data-asm-attribute*="' + breed.getAttribute('data-asm-sort-target') + '"]');
			if (breed.checked === true) {
				showPets(pets);
			}
		}));

		// Toggle all other attributes
		Array.from(attributeFilters).forEach((function (att) {
			var pets = document.querySelectorAll('[data-asm-attribute*="' + att.getAttribute('data-asm-sort-target') + '"]');
			if (att.checked === false) {
				hidePets(pets);
			}
		}));

	};

	var toggleAllCheckboxes = function (checkbox) {
		Array.from(breedFilters).forEach((function (filter) {
			filter.checked = checkbox.checked;
		}));
	};

	var updateState = function (state, checkbox) {
		if (checkbox.checked) {
			delete state[checkbox.getAttribute('data-asm-sort-target')];
		} else {
			state[checkbox.getAttribute('data-asm-sort-target')] = false;
		}
	};

	var saveState = function (checkbox, toggleAll) {

		// Only run if sessionStorage is supported
		if (!window.sessionStorage) return;

		// Get currently saved
		var state = sessionStorage.getItem(sessionID);
		state = state ? JSON.parse(state) : {};

		// Update state
		state[checkbox.getAttribute('data-asm-sort-target')] = checkbox.checked;
		updateState(state, checkbox);
		if (toggleAll) {
			Array.prototype.filter.call(document.querySelectorAll('[data-asm-sort-type="breeds"]'), (function (breed) {
				updateState(state, breed);
			}));
		}

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
		Object.keys(state).forEach((function (key) {
			var filter = document.querySelector('[data-asm-sort-target="' + key + '"]');
			if (!filter) return;
			filter.checked = state[key];
		}));

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
		var toggleAll = checkbox.getAttribute('data-asm-sort-type') === 'toggle-all';
		if (toggleAll) {
			toggleAllCheckboxes(checkbox);
		}

		// Filter pet listings
		filterPets();

		// Save state
		saveState(checkbox, toggleAll);

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
// Run filters
if (window.petListingsCreateFilters) {
	petListingsCreateFilters();

	if (window.petListingsFilter) {
		petListingsFilter();
	}
}