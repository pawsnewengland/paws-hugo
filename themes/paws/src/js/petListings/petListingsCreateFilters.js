var petListingsCreateFilters = function () {

	'use strict';

	//
	// Variables
	//

	if (!petListingData) return;
	var filters = document.querySelector('[data-pet-listing-filters]');
	var listings = document.querySelector('[data-pet-listings]');
	var pets = JSON.parse(JSON.stringify(petListingData));


	//
	// Methods
	//

	var propify = function (str) {
		return str.replace(/ /g, '-').toLowerCase();
	};

	var getSizes = function () {
		var sizes = [];
		if (pets.find(function (pet) { return pet.size === 'Small' })) sizes.push('Small');
		if (pets.find(function (pet) { return pet.size === 'Medium' })) sizes.push('Medium');
		if (pets.find(function (pet) { return pet.size === 'Large' })) sizes.push('Large');
		if (pets.find(function (pet) { return pet.size === 'Very Large' })) sizes.push('Very Large');
		return sizes;
	};

	var getAges = function () {
		var ages = [];
		if (pets.find(function (pet) { return pet.age === 'Baby' })) ages.push('Baby');
		if (pets.find(function (pet) { return pet.age === 'Young' })) ages.push('Young');
		if (pets.find(function (pet) { return pet.age === 'Adult' })) ages.push('Adult');
		if (pets.find(function (pet) { return pet.age === 'Senior' })) ages.push('Senior');
		return ages;
	};

	var getGenders = function () {
		var genders = [];
		if (pets.find(function (pet) { return pet.sex === 'Male' })) genders.push('Male');
		if (pets.find(function (pet) { return pet.sex === 'Female' })) genders.push('Female');
		return genders;
	};

	var getBreeds = function () {
		var breeds = [];
		pets.forEach(function (pet) {
			pet.breeds.forEach(function (breed) {
				if (breeds.indexOf(breed) === -1) {
					breeds.push(breed);
				}
			});
		});
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
		atts.forEach(function (att) {
			html += createFilterLabel(attName, att, type);
		});
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

	var createMatchingPets = function () {
		var p = document.createElement('p');
		p.setAttribute('data-no-matching-pets', 'true');
		p.setAttribute('hidden', 'hidden');
		p.textContent = 'There are no dogs matching your criteria.';
		return p;
	};

	//
	// Inits
	//

	if (!filters || !pets) return;
	filters.innerHTML = createFilters();
	listings.prepend(createMatchingPets());

};