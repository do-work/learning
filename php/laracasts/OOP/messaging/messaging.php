<?php

use Messaging\Person;
use Messaging\Staff;
use Messaging\Business;

$david = new Person('David');
$staff = new Staff([$david]);
$doSolutions = new Business($staff)  ;

$doSolutions->hire(new Person('Jenn'));

var_dump($doSolutions->getStaffMembers());
