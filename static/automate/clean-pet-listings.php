<?php

	#!/usr/bin/php -q

	/**
	 * Remove expired pets from pet listings
	 */

	function clean_pet_listings_build () {

		// Variables
		$path = '/srv/users/serverpilot/apps/paws/build/content/adopt';
		$pets = scandir($path);

		// Remove pet files
		foreach ($pets as $pet) {
			$prefix = substr($pet, 0, 4);
			if ($prefix === 'pet-') {
				unlink($path . '/' . $pet);
			}
		}

	}


	function clean_pet_listings_public () {

		// Variables
		$path_build = '/srv/users/serverpilot/apps/paws/build/content/adopt';
		$path_public = '/srv/users/serverpilot/apps/paws/public/adopt';
		$pets_build = scandir($path_build);
		$pets_public = scandir($path_public);

		// Remove pet files
		foreach ($pets_public as $pet) {
			if (substr($pet, 0, 4) !== 'pet-') continue;
			$exists = array_search($pet . '.md', $pets_build);
			if (!$exists) {
				unlink($path_public . '/' . $pet . '/index.html');
				rmdir($path_public . '/' . $pet);
			}
		}

	}