<?php namespace Review;

class RegisterUser
{
    public function execute(array $data, RespondsToUserRegistration $listener)
    {
        var_dump('Registering the user.');

         $listener->userRegistrationFailed();
    }
}