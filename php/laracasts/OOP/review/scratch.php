<?php

use Review\RegisterUser;
use Review\AuthController;

$registration = new RegisterUser();
$authController = new AuthController($registration);

$authController->register();