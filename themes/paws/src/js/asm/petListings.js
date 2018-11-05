var petListings = function () {

	'use strict';

	//
	// Variables
	//

	var app = document.querySelector('[data-asm="pet-listings"]');
	var sessionID = 'asmPetData';
	var original, title;


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
		return string ? string[1] : null;
	};

	var removeQueryStrings = function () {
		return window.location.href.split('?')[0];
	};

	var emitEvent = function (type) {
		var event = new CustomEvent(type, {
			bubbles: true,
			cancelable: true
		});
		app.dispatchEvent(event);
	};

	var saveTitle = function () {
		var tempTitle = document.title.split(' | ');
		title = {
			original: document.title,
			base: tempTitle.length > 1 ? tempTitle[1] : ''
		};
	};

	var updateTitle = function (pet) {
		console.log(pet);
	};

	var propify = function (str) {
		return str.replace(/ /g, '-').toLowerCase();
	};

	var getSizes = function (pets) {
		var sizes = [];
		if (pets.find(function (pet) { return pet.size === 'Small' })) sizes.push('Small');
		if (pets.find(function (pet) { return pet.size === 'Medium' })) sizes.push('Medium');
		if (pets.find(function (pet) { return pet.size === 'Large' })) sizes.push('Large');
		if (pets.find(function (pet) { return pet.size === 'Very Large' })) sizes.push('Very Large');
		return sizes;
	};

	var getAges = function (pets) {
		var ages = [];
		if (pets.find(function (pet) { return pet.age === 'Baby' })) ages.push('Baby');
		if (pets.find(function (pet) { return pet.age === 'Young' })) ages.push('Young');
		if (pets.find(function (pet) { return pet.age === 'Adult' })) ages.push('Adult');
		if (pets.find(function (pet) { return pet.age === 'Senior' })) ages.push('Senior');
		return ages;
	};

	var getGenders = function (pets) {
		var genders = [];
		if (pets.find(function (pet) { return pet.sex === 'Male' })) genders.push('Male');
		if (pets.find(function (pet) { return pet.sex === 'Female' })) genders.push('Female');
		return genders;
	};

	var getBreeds = function (pets) {
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
		var html = '';

		// Create filter HTML
		html += createFilterHTML(sizes, 'Sizes');
		html += createFilterHTML(ages, 'Ages');
		html += createFilterHTML(genders, 'Genders');
		html += createFilterHTML(breeds, 'Breeds', true);
		html += createOptionsFilterHTML();

		// Add wrapper and toggle button
		html = '<div class="asm-filters margin-bottom" id="asm-filters">' + html + '</div>';
		html += '<div class="asm-filters-toggle"><button class="btn" data-asm-filters-toggle>Filter Results</button></div>';

		return html;

	};

	var createGoodWithHTML = function (pet) {
		var html = '';
		if (pet.nodogs && pet.nocats && pet.nokids) { html = 'No Dogs/Cats/Kids'; }
		else if (pet.nodogs && pet.nocats) { html = 'No Dogs/Cats'; }
		else if (pet.nodogs && pet.nokids) { html = 'No Dogs/Kids'; }
		else if (pet.nocats && pet.nokids) { html = 'No Cats/Kids'; }
		else if (pet.nodogs) { html = 'No Dogs'; }
		else if (pet.nocats) { html = 'No Cats'; }
		else if (pet.nokids) { html = 'No Kids'; }
		return html;
	};

	var getPetBreedAttributes = function (pet) {
		var breeds = [];
		pet.breeds.forEach(function (breed) {
			breeds.push(propify('breeds_' + breed));
		});
		return breeds.join(' ');
	};

	var getPetOptionsAttributes = function (pet) {
		var options = [];
		if (pet.nodogs) options.push(propify('options_' + 'No Dogs'));
		if (pet.nocats) options.push(propify('options_' + 'No Cats'));
		if (pet.nokids) options.push(propify('options_' + 'No Kids'));
		if (pet.specialneeds) options.push(propify('options_' + 'Special Needs'));
		return options.join(' ');
	};

	var getPetAttributes = function (pet) {
		return [
			propify('sizes_' + pet.size),
			propify('ages_' + pet.age),
			propify('genders_' + pet.sex),
			getPetBreedAttributes(pet),
			getPetOptionsAttributes(pet)
		].join(' ');
	};

	var createListingHTML = function (pet) {
		var goodWith = createGoodWithHTML(pet);
		var html =
			'<article class="grid-auto grid-asm text-center margin-bottom" data-asm-attribute="' + getPetAttributes(pet) + '">' +
				'<header>' +
					'<a href="?petID=' + pet.id + '">' +
						'<figure>' +
							'<img class="img-photo asm-img-limit-height" alt="A photo of ' + pet.name + '" src="' + (pet.images > 0 ? 'https://us02.sheltermanager.com/service?account=zh0572&method=animal_image&animalid=' + pet.id + '&seq=1' : '/img/adopt-missing-photo.png') + '">' +
						'</figure>' +
						'<h2 class="h3 no-padding-top no-margin-top no-padding-bottom no-margin-bottom">' +
							pet.name  +
						'</h2>' +
					'</a>' +
				'</header>' +
				'<div class="text-small">' +
					'<div>' + [pet.size, pet.age, pet.sex].join(', ') + '</div>' +
					'<div class="text-muted">' + pet.breeds.join(', ') + '</div>' +
					(goodWith.length > 0 ? '<div><em class="text-muted">' + goodWith + '</em></div>' : '') +
					(pet.specialneeds ? '<div><em class="text-muted">Special Needs</em></div>' : '') +
				'</div>' +
			'</article>';
		return html;
	};

	var createListings = function (pets) {
		var html = '';
		pets.forEach(function (pet) {
			html += createListingHTML(pet);
		});
		return html;
	};

	var renderPetListings = function (pets) {

		// Create the markup
		var filters = createFilters(pets);
		var listings = createListings(pets);

		// Render the DOM
		var template =
			'<h1>Our Adoptable Dogs</h1>' +
			'<div class="row">' +
				'<div class="grid-fourth">' +
					filters +
				'</div>' +
				'<div class="margin-bottom padding-top grid-three-fourths">' +
					'<div class="row row-start-xsmall row-wrap">' +
						listings +
					'</div>' +
				'</div>' +
			'</div>';
		saferInnerHTML(app, template);

		// Emit event
		emitEvent('asmAllPets');

	};

	var getIndividualPet = function (pets, id) {
		id = parseInt(id, 10);
		return pets.find(function (pet) {
			return parseInt(pet.id, 10) === id;
		});
	};

	var renderNoPet = function () {
		var template =
			'<h1 class="no-margin-bottom">This dog is no longer available for adoption</h1>' +
			'<p><a href="' + removeQueryStrings() + '">&larr; Back to all dogs</a></p>' +
			'<p><img style="width:100%;" src="https://media.giphy.com/media/yoJC2oHh0Js8DpfYR2/giphy.gif"></p>' +
			'<p>This dog is no longer available for adoption. Sorry! <a href="' + removeQueryStrings() + '">Check out other dogs we have available for adoption.</a></p>';
		saferInnerHTML(app, template);
	};

	var createPetImageGalleryHTML = function (pet) {

		// If there are no images for this pet
		if (pet.images < 1) return '';

		// Create photos
		var photos = '';
		for (var i = 0; i < pet.images; i++) {
			var url = 'https://us02.sheltermanager.com/service?account=zh0572&method=animal_image&animalid=' + pet.id + '&seq=' + (i + 1);
			photos += '<a class="grid-third" data-size href="' + url + '" ><img class="img-photo asm-img-limit-height" alt="A photo of ' + pet.name + '" src="' + url + '"></a>';
		}

		// Create gallery
		var html =
			'<div data-photoswipe class="row row-start-xsmall row-wrap text-center margin-bottom-small">' +
				photos +
			'</div>' +
			'<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">' +
				'<div class="pswp__bg"></div>' +
				'<div class="pswp__scroll-wrap">' +
					'<div class="pswp__container">' +
						'<div class="pswp__item"></div>' +
						'<div class="pswp__item"></div>' +
						'<div class="pswp__item"></div>' +
					'</div>' +
					'<div class="pswp__ui pswp__ui--hidden">' +
						'<div class="pswp__top-bar">' +
							'<div class="pswp__counter"></div>' +
							'<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
							'<button class="pswp__button pswp__button--share" title="Share"></button>' +
							'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>' +
							'<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>' +
							'<div class="pswp__preloader">' +
								'<div class="pswp__preloader__icn">' +
								'<div class="pswp__preloader__cut">' +
									'<div class="pswp__preloader__donut"></div>' +
								'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
							'<div class="pswp__share-tooltip"></div>' +
						'</div>' +
						'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>' +
						'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>' +
						'<div class="pswp__caption">' +
							'<div class="pswp__caption__center"></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';

		return html;
	};

	var createPetHTML = function (pet) {
		var goodWith = createGoodWithHTML(pet);
		var html =
			'<header>' +
				'<h1 class="no-margin-bottom">' + pet.name + '</h1>' +
				'<aside>' +
					'<p><a href="' + removeQueryStrings() + '">&larr; Back to all dogs</a></p>' +
				'</aside>' +
			'</header>' +
			createPetImageGalleryHTML(pet) +
			'<div class="margin-bottom">' +
				'<strong>Size:</strong> ' + pet.size + '<br>' +
				'<strong>Age:</strong> ' + pet.age + '<br>' +
				'<strong>Gender:</strong> ' + pet.sex + '<br>' +
				'<strong>Breeds:</strong> ' + pet.breeds.join(', ') +
				(goodWith.length > 0 ? '<div><em>' + goodWith + '</em></div>' : '') +
				(pet.specialneeds ? '<div><em>Special Needs</em></div>' : '') +
			'</div>' +
			'<p><a class="btn" href="/adopt/application?pet=' + encodeURIComponent(pet.name) + '::' + pet.sheltercode + '">Fill out an adoption form</a></p>' +
			pet.description.replace(/\n/g, '<br>');
		return html;
	};

	var renderPetListing = function (pets, id) {

		// Update the DOM
		app.classList.remove('container-large');

		// Get the dog's info
		var pet = getIndividualPet(pets, id);

		// If no matching dog is found, show error
		if (!pet) {
			renderNoPet();
			return;
		}

		// Create the listing
		saferInnerHTML(app, createPetHTML(pet));

		// Update title
		updateTitle(pet);

		// Emit event
		emitEvent('asmIndividualPet');

	};

	var renderError = function () {
		saferInnerHTML(app, original);
	};

	var run = function (pets) {

		// Check if listing is for an individual dog or not
		var petID = getQueryString('petID');

		// If it's for just one dog
		if (petID) {
			renderPetListing(pets, petID);
			return;
		}

		// If it's for all dogs
		renderPetListings(pets);

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

	var loading = function () {
		original = app.innerHTML;
		saveTitle();
		app.innerHTML = 'Loading...';
	};


	//
	// Inits
	//

	if (!app) return;
	loading();
	getPets();

};