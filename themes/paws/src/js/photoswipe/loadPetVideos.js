var loadPetVideos = function () {

	'use strict';

	//
	// Variables
	//

	var videos = document.querySelectorAll('[data-pet-video]');


	//
	// Methods
	//

	/**
	 * Get YouTube video ID
	 * @param  {String} url The video URL
	 * @return {String}     The video ID
	 */
	var getYouTubeID = function (url) {
		if (/youtu.be/.test(url)) {
			return url.replace('https://youtu.be/', '');
		}
		return getQueryString('v', url);
	};

	/**
	 * Get Vimeo video ID
	 * @param  {String} url The video URL
	 * @return {String}     The video ID
	 */
	var getVimeoID = function (url) {
		return removeQueryStrings(url).replace('https://vimeo.com/', '');
	};

	/**
	 * Determine if the video is from YouTube or Vimeo
	 * @param  {String} url The video URL
	 * @return {String}     The video service
	 */
	var getVideoService = function (url) {
		var service;
		if (/youtu.be/.test(url) || /youtube.com/.test(url)) { service = 'youtube'; }
		else if (/vimeo.com/.test(url)) { service = 'vimeo'; }
		return service;
	};

	/**
	 * Load a YouTube video into the DOM
	 * @param  {Node}   elem The element to load the video into
	 * @param  {String} url  The video URL
	 */
	var loadYouTube = function (elem, url) {
		elem.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + getYouTubeID(url) + '?rel=0" frameborder="0" allow="autoplay; encrypted-media; fullscreen;" allowfullscreen></iframe>';
	};

	/**
	 * Load a Vimeo video into the DOM
	 * @param  {Node}   elem The element to load the video into
	 * @param  {String} url  The video URL
	 */
	var loadVimeo = function (elem, url) {
		elem.innnerHTML = '<iframe src="https://player.vimeo.com/video/' + getVimeoID(url) + '?color=f6aa020&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	};

	/**
	 * Load the video into the DOM
	 * @param  {Node} elem The element to load the video into
	 */
	var loadVideo = function (elem) {

		// Variables
		var url = elem.getAttribute('data-pet-video');
		if (!url) return;
		var service = getVideoService(url);

		// Load the video
		if (service === 'youtube') {
			loadYouTube(elem, url);
		} else if (service === 'vimeo') {
			loadVimeo(elem, url);
		}

	};


	//
	// Inits
	//

	if (videos.length < 1) return;
	Array.prototype.forEach.call(videos, function (video) {
		loadVideo(video);
	});

};