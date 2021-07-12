<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

return [
	'css' => 'dist/tailwind.bundle.css',
	'js' => 'dist/tailwind.bundle.js',
	'rel' => [
		'main.core',
	],
	'skip_core' => true
];