<?php

	#!/usr/bin/php -q

	/**
	 * Get pets from Shelter Manager API
	 * https://sheltermanager.com/repo/asm3_help/service.html
	 */

	include_once('run-get-pets.php');

	$repo_dir = '/srv/users/serverpilot/apps/paws/build';
	$web_root_dir = '/srv/users/serverpilot/apps/paws/public';
	$rendered_dir = '/public';
	$hugo_path = '/usr/local/bin/hugo';

	run_get_pets();
	exec('cd ' . $repo_dir . ' && ' . $hugo_path);
	exec('cd ' . $repo_dir . ' && cp -r ' . $repo_dir . $rendered_dir . '/. ' . $web_root_dir);