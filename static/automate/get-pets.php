<?php

	#!/usr/bin/php -q

	/**
	 * Get pets from Shelter Manager API
	 * https://sheltermanager.com/repo/asm3_help/service.html
	 */


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
			// 'nodogs' => $pet['ISGOODWITHDOGSNAME'] === 'Yes' ? false : true,
			// 'nocats' => $pet['ISGOODWITHCATSNAME'] === 'Yes' ? false : true,
			// 'nokids' => $pet['ISGOODWITHCHILDRENNAME'] === 'Yes' ? false : true,
			'nodogs' => $pet['ISGOODWITHDOGS'],
			'nocats' => $pet['ISGOODWITHCATS'],
			'nokids' => $pet['ISGOODWITHCHILDREN'],
			'specialneeds' => $pet['HASSPECIALNEEDSNAME'] === 'Yes' ? true : false,
			'sheltercode' => $pet['SHELTERCODE'],
			'description' => $pet['ANIMALCOMMENTS'],
			'images' => $pet['WEBSITEIMAGECOUNT'], // https://us02.sheltermanager.com/service?account=zh0572&method=animal_image&animalid=7986&seq=3
			'video' => $pet['WEBSITEVIDEOURL'],
		);
	}

	// Save to the server
	file_put_contents('../api/adoptable-pets.json', json_encode($pets));
	file_put_contents('get-pets.log', date('m/d/Y h:i:s a') . " Success " . "\n", FILE_APPEND);
	return 'done';