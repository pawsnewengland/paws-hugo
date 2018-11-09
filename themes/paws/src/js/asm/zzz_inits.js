// Initialize filters after render
document.addEventListener('asmAllPets', function () {
	if (!window.petListingsFilter) return;
	petListingsFilter();
}, false);

// Initialize PhotoSwipe after render
document.addEventListener('asmIndividualPet', function () {
	if (!window.initPhotoSwipeFromDOM) return;
	initPhotoSwipeFromDOM('[data-photoswipe]');
	fluidvids.render();
}, false);

// Render pet listings
petListings();