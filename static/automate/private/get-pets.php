<?php

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

	// Create Pet JSON
	$responseBody = json_decode($response->body, true);
	if (empty($responseBody)) return;
	$pets = array();

	foreach ($responseBody as $key => $pet) {
		$pets[] = array(
			'id' => $pet['ID'],
			'name' => $pet['ANIMALNAME'],
			'size' => $pet['SIZENAME'],
			'age' => $pet['AGEGROUP'],
			'sex' => $pet['SEXNAME'],
			'breeds' => explode('/', $pet['BREEDNAME']),
			'description' => $pet['ANIMALCOMMENTS'],
			'images' => $pet['WEBSITEIMAGECOUNT'], // https://us02.sheltermanager.com/service?account=zh0572&method=animal_image&animalid=7986&seq=3
			'video' => $pet['WEBSITEVIDEOURL'],
		);
	}

	print('<pre>');
	print_r($responseBody);
	print('<pre>');x


	file_put_contents('../../api/adoptable-pets.json', json_encode($pets));
