/*!
 * paws v1.4.3
 * The theme for pawsnewengland.com
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/pawsnewengland/paws
 */

var cacheBust = '.1.4.3'
;(function (window, document, undefined) {

	'use strict';

	// Variables
	var buyNow = document.querySelectorAll('.edd-buy-now-button');

	// Handle "buy now" clicks
	// Don't run if right-click or command/control + click
	var buyNowHandler = function (event) {
		if (!event.target.classList.contains('edd-buy-now-button')) return;
		if (event.button !== 0 || event.metaKey || event.ctrlKey) return;
		event.target.innerHTML = 'Adding to cart...';
		event.target.classList.add('disabled');
	};

	// Listen for "buy now" clicks
	if (buyNow.length > 0) {
		document.addEventListener('click', buyNowHandler, false);
	}

})(window, document);
/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.fluidvids = factory();
  }
})(this, (function () {

  'use strict';

  var fluidvids = {
    selector: ['iframe'],
    players: ['www.youtube.com', 'player.vimeo.com']
  };

  var css = [
    '.fluidvids {',
      'width: 100%; max-width: 100%; position: relative;',
    '}',
    '.fluidvids-item {',
      'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',
    '}'
  ].join('');

  var head = document.head || document.getElementsByTagName('head')[0];

  var matches = function (src) {
    return new RegExp('^(https?:)?\/\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(src);
  };

  var getRatio = function (height, width) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  };

  var fluid = function (elem) {
    if (!matches(elem.src) || !!elem.getAttribute('data-fluidvids')) return;
    var wrap = document.createElement('div');
    elem.parentNode.insertBefore(wrap, elem);
    elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';
    elem.setAttribute('data-fluidvids', 'loaded');
    wrap.className += 'fluidvids';
    wrap.style.paddingTop = getRatio(elem.height, elem.width);
    wrap.appendChild(elem);
  };

  var addStyles = function () {
    var div = document.createElement('div');
    div.innerHTML = '<p>x</p><style>' + css + '</style>';
    head.appendChild(div.childNodes[1]);
  };

  fluidvids.render = function () {
    var nodes = document.querySelectorAll(fluidvids.selector.join());
    var i = nodes.length;
    while (i--) {
      fluid(nodes[i]);
    }
  };

  fluidvids.init = function (obj) {
    for (var key in obj) {
      fluidvids[key] = obj[key];
    }
    fluidvids.render();
    addStyles();
  };

  return fluidvids;

}));
var mailchimpSubmit = function (form, callback) {

	'use strict';


	//
	// Variables
	//

	// Fields
	if (!form) return;
	var status = form.querySelector('#mc-status');

	// Messages
	var successMessage = 'Success! Thanks for inviting us to your inbox.';

	// Endpoint
	var endpoint = '/donate/wp-json/gmt-mailchimp/v1/subscribe';


	//
	// Methods
	//

	/**
	 * Serialize all form data into a query string
	 * @param  {Node}   form The form to serialize
	 * @return {String}      The serialized form data
	 */
	var serialize = function (form) {

		// Setup our serialized data
		var serialized = [];

		// Loop through each field in the form
		for (var i = 0; i < form.elements.length; i++) {

			var field = form.elements[i];

			// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
			if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

			// If a multi-select, get all selections
			if (field.type === 'select-multiple') {
				for (var n = 0; n < field.options.length; n++) {
					if (!field.options[n].selected) continue;
					serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
				}
			}

			// Convert field data to a query string
			else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
			}
		}

		return serialized.join('&');

	};

	var showStatus = function (msg, success) {

		// Bail if there's no status container
		if (!status) return;

		// Update the status message
		status.textContent = msg;

		// Set status class
		status.className = success ? 'success-message' : 'error-message';

		// Bring error to focus
		status.setAttribute('tabindex', '-1');
		status.focus();

	};

	var disableButton = function () {
		var btn = form.querySelector('[data-processing]');
		if (!btn) return;
		btn.setAttribute('data-original', btn.innerHTML);
		btn.setAttribute('disabled', 'disabled');
		btn.innerHTML = btn.getAttribute('data-processing');
	};

	var enableButton = function () {
		var btn = form.querySelector('[data-processing]');
		if (!btn) return;
		btn.removeAttribute('disabled');
		btn.innerHTML = btn.getAttribute('data-original');
	};

	var sendData = function (params) {

		// Set up our HTTP request
		var xhr = new XMLHttpRequest();

		// Setup our listener to process compeleted requests
		xhr.onreadystatechange = function () {

			// Only run if the request is complete
			if ( xhr.readyState !== 4 ) return;

			// Show status message
			var success = xhr.status === 200 ? true : false;
			var response = JSON.parse(xhr.responseText);
			if (success) {
				showStatus(successMessage, success);
			} else {
				showStatus(response.message, success);
			}

			// Reenable button
			enableButton();

			// If there's a callback, run it
			if (callback && typeof callback === 'function') {
				callback(response);
			}

		};

		// Create and send a GET request
		// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
		// The second argument is the endpoint URL
		xhr.open('POST', endpoint + '?' + params);
		xhr.send();

	};


	//
	// Send the form
	//

	// Disable the submit button
	disableButton();

	// Send the data to the MailChimp API
	sendData(serialize(form));

};
/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com', 'www.slideshare.net', 'www.hulu.com', 'videopress.com/embed/']
});