<?php

	#!/usr/bin/php -q

	// Include required files
	include_once('/srv/users/serverpilot/apps/paws/public/automate/clean-pet-listings.php');
	include_once('/srv/users/serverpilot/apps/paws/public/automate/create-pet-listings.php');

	// Load helper library
	require_once('/srv/users/serverpilot/apps/paws/public/automate/Requests/library/Requests.php');
	Requests::register_autoloader();

	/**
	 * Run script to get pets from Shelter Manager API
	 * https://sheltermanager.com/repo/asm3_help/service.html
	 */

	function run_get_pets () {

		// Variables
		$account = getenv('ASM_ACCOUNT');
		$username = getenv('ASM_USERNAME');
		$password = getenv('ASM_PASSWORD');
		$endpoint = 'https://service.sheltermanager.com/asmservice?method=json_adoptable_animals';

		// Make the request
		$request = $endpoint . '&account=' . $account . '&username=' . $username . '&password=' . $password;
		$response = Requests::get($request);

		// Get the data
		$responseBody = json_decode($response->body, true);
		if (empty($responseBody)) {
			file_put_contents('/srv/users/serverpilot/apps/paws/public/automate/get-pets.log', date('m/d/Y h:i:s a') . " Fail " . "\n", FILE_APPEND);
			return 'failed';
		}

		// Create the JSON file
		$pets = array();
		foreach ($responseBody as $key => $pet) {
			$pets[] = array(
				'id' => $pet['ID'],
				'name' => $pet['ANIMALNAME'],
				'size' => $pet['SIZENAME'],
				'age' => $pet['AGEGROUP'],
				'sex' => $pet['SEXNAME'],
				'breeds' => explode('/', $pet['BREEDNAME']),
				'nodogs' => $pet['ISGOODWITHDOGS'],
				'nocats' => $pet['ISGOODWITHCATS'],
				'nokids' => $pet['ISGOODWITHCHILDREN'],
				'specialneeds' => $pet['HASSPECIALNEEDSNAME'] === 'Yes' ? true : false,
				'sheltercode' => $pet['SHELTERCODE'],
				'description' => $pet['ANIMALCOMMENTS'],
				'images' => $pet['WEBSITEIMAGECOUNT'],
				'video' => $pet['WEBSITEVIDEOURL'],
			);
		}

		// Save to the server
		file_put_contents('/srv/users/serverpilot/apps/paws/public/api/pets.json', json_encode($pets));
		file_put_contents('/srv/users/serverpilot/apps/paws/public/automate/get-pets.log', date('m/d/Y h:i:s a') . " Success " . "\n", FILE_APPEND);

		// Create pet listings
		clean_pet_listings_build();
		clean_pet_listings_public();
		create_pet_listings($pets);

		// Directory paths
		$repo_dir = '/srv/users/serverpilot/apps/paws/build';
		$web_root_dir = '/srv/users/serverpilot/apps/paws/public';
		$rendered_dir = '/public';
		$hugo_path = '/usr/local/bin/hugo';

		// Run build
		exec('cd ' . $repo_dir . ' && ' . $hugo_path);
		exec('cd ' . $repo_dir . ' && cp -r ' . $repo_dir . $rendered_dir . '/. ' . $web_root_dir);

		return 'done';

	}