<?php namespace Review;

interface RespondsToUserRegistration
{
    public function userRegisteredSuccessfully();

    public function userRegistrationFailed();
}