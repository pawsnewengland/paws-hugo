<?php

	#!/usr/bin/php -q

	/**
	 * Create pet listings
	 */

	function propify ($str) {
		return strtolower(str_replace(' ', '-', $str));
	}

	function get_pet_breed_attributes ($pet) {
		$breeds = array();
		foreach ($pet['breeds'] as $breed) {
			$breeds[] = 'breeds_' . propify($breed);
		}
		return implode(' ', $breeds);
	}

	function get_pet_options_attributes ($pet) {
		$options = array();
		if ($pet['nodogs'] === 1) $options[] = propify('options_' . 'No Dogs');
		if ($pet['nocats'] === 1) $options[] = propify('options_' . 'No Cats');
		if ($pet['nokids'] === 1) $options[] = propify('options_' . 'No Kids');
		if ($pet['specialneeds']) $options[] = propify('options_' . 'Special Needs');
		return implode(' ', $options);
	}

	function get_pet_attributes ($pet) {
		return implode(' ', array(
			propify('sizes_' . $pet['size']),
			propify('ages_' . $pet['age']),
			propify('genders_' . $pet['sex']),
			get_pet_breed_attributes($pet),
			get_pet_options_attributes($pet)
		));
	};

	function create_good_with_html ($pet) {

		$html = array();

		// Get "bad with" text
		if ($pet['nodogs'] === 1 && $pet['nocats'] === 1 && $pet['nokids'] === 1) { $html[] = 'No Dogs/Cats/Kids'; }
		else if ($pet['nodogs'] === 1 && $pet['nocats'] === 1) { $html[] = 'No Dogs/Cats'; }
		else if ($pet['nodogs'] === 1 && $pet['nokids'] === 1) { $html[] = 'No Dogs/Kids'; }
		else if ($pet['nocats'] === 1 && $pet['nokids'] === 1) { $html[] = 'No Cats/Kids'; }
		else if ($pet['nodogs'] === 1) { $html[] = 'No Dogs'; }
		else if ($pet['nocats'] === 1) { $html[] = 'No Cats'; }
		else if ($pet['nokids'] === 1) { $html[] = 'No Kids'; }

		// Get "unknown" text
		if ($pet['nodogs'] === 2 && $pet['nocats'] === 2 && $pet['nokids'] === 2) { $html[] = 'Unknown with Dogs/Cats/Kids'; }
		else if ($pet['nodogs'] === 2 && $pet['nocats'] === 2) { $html[] = 'Unknown with Dogs/Cats'; }
		else if ($pet['nodogs'] === 2 && $pet['nokids'] === 2) { $html[] = 'Unknown with Dogs/Kids'; }
		else if ($pet['nocats'] === 2 && $pet['nokids'] === 2) { $html[] = 'Unknown with Cats/Kids'; }
		else if ($pet['nodogs'] === 2) { $html[] = 'Unknown with&nbsp;Dogs'; }
		else if ($pet['nocats'] === 2) { $html[] = 'Unknown with&nbsp;Cats'; }
		else if ($pet['nokids'] === 2) { $html[] = 'Unknown with&nbsp;Kids'; }

		return implode('<br>', $html);

	}

	// Create pet files
	function create_pet_listings ($pets) {
		$path = getenv('ASM_BUILD_PATH');
		$pets_reverse = array_reverse($pets);
		foreach ($pets_reverse as $key => $pet) {
			$pet_details = '' .
				'---' . "\n" .
				'title: ' . $pet['name'] . "\n" .
				'date: ' . date('c') . "\n" .
				'petID: ' . $pet['id'] . "\n" .
				'size: ' . $pet['size'] . "\n" .
				'age: ' . $pet['age'] . "\n" .
				'sex: ' . $pet['sex'] . "\n" .
				'breeds: ' . '[' . implode(',', $pet['breeds']) . ']' . "\n" .
				'nodogs: ' . $pet['nodogs'] . "\n" .
				'nocats: ' . $pet['nocats'] . "\n" .
				'nokids: ' . $pet['nokids'] . "\n" .
				'goodwith: ' . create_good_with_html($pet) . "\n" .
				'specialneeds: ' . $pet['specialneeds'] . "\n" .
				'attributes: ' .get_pet_attributes($pet) . "\n" .
				'sheltercode: ' . $pet['sheltercode'] . "\n" .
				'images: ' . $pet['images'] . "\n" .
				'video: ' . $pet['video'] . "\n" .
				'weight: ' . $key . "\n" .
				'---' . "\n\n" .
				$pet['description'];
			file_put_contents($path . '/pet-' . $pet['id'] . '.md', $pet_details);
		}
	}