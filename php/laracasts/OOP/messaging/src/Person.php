<?php
namespace Messaging;

class Person
{
    protected $name;

    /**
     * Business constructor.
     * @param $name
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

}
