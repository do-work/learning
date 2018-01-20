<?php namespace Review;

class AuthController implements RespondsToUserRegistration
{
    protected $registration;

    public function __construct(RegisterUser $registration)
    {
        $this->registration = $registration;
    }

    public function register()
    {
        $this->registration->execute([], $this);
    }

    public function userRegisteredSuccessfully()
    {
        var_dump('created successfully. redirect somewhere');
    }

    public function userRegistrationFailed()
    {
        var_dump('created un-successfully. redirect back');

    }
}