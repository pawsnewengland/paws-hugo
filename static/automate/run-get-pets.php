<?php

	#!/usr/bin/php -q

	/**
	 * Run script to get pets from Shelter Manager API
	 * https://sheltermanager.com/repo/asm3_help/service.html
	 */

	function run_get_pets () {

		// Include required files
		include_once('clean-pet-listings.php');
		include_once('create-pet-listings.php');

		// Load helper library
		require_once('Requests/library/Requests.php');
		Requests::register_autoloader();

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
			file_put_contents('get-pets.log', date('m/d/Y h:i:s a') . " Fail " . "\n", FILE_APPEND);
			return 'done';
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
		file_put_contents('../api/pets.json', json_encode($pets));
		file_put_contents('get-pets.log', date('m/d/Y h:i:s a') . " Success " . "\n", FILE_APPEND);

		// Create pet listings
		clean_pet_listings_build();
		create_pet_listings($pets);

		return 'done';

	}