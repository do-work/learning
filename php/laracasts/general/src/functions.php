<?php


function dd($test)
{
//    echo '<pre>';
    die(var_dump($test));
}

function agecheck($age)
{
    if ($age < 21) {
        echo 'Sorry, you gotta grow up more!';
    } else {
        echo 'Ok, what would you like to have?';
    }
}
