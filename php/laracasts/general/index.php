<?php

$query = require 'bootstrap.php';

$tasks = $query->selectAll('todos', 'Task');
//$animals = $query->selectAll('animals');

require 'view/index2.view.php';
