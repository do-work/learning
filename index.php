<?php

require 'functions.php';

$greeting = 'Hello, here is a list of our animals:';


$animals = [
	'Amdi',
	'Winkster',
	'Fuzz',
	'Ellie',
	'Xander'

];

$task = [
	'title' => 'do laundry',
	'due' => 'sunday',
	'assigned_to' => 'David',
	'completed' => false
];


require 'index.view.php';
