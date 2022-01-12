<?php

	#!/usr/bin/php -q

	/**
	 * Remove expired pets from pet listings
	 */

	include_once('/srv/users/serverpilot/apps/paws/public/automate/clean-pet-listings.php');
	clean_pet_listings_public();