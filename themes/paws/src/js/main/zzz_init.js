/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com', 'www.slideshare.net', 'www.hulu.com', 'videopress.com/embed/']
});

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp(function (response) {
		if (response.code === 200) {
			window.location.href = '/newsletter-success';
		}
	});
}