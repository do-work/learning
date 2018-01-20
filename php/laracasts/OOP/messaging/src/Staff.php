<?php
namespace Messaging;

class Staff
{
    protected $members = [];

    /**
     * Staff constructor.
     * @param array $members
     */
    public function __construct(array $members = []) //without the default value it will error if a member is not passed in on line56
    {
        $this->members = $members;
    }


    public function add(Person $person){
        $this->members[] = $person;
    }

    public function getMembers(){
        return $this->members;
    }

}
