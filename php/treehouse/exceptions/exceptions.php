<?php

ini_set('display_errors', 'Off');

function exception_error_handler($severity, $message, $file, $line)
{
    throw new ErrorException($message, 0, $severity, $file, $line);
}

set_error_handler("exception_error_handler");

function exception_handler($e)
{
    echo "Uncaught Exception:" . $e->getMessage();
}

set_exception_handler("exception_handler");

try {
    strpos();
} catch (Exception $e) {
    echo "Error! " . $e->getMessage();
}

echo 10 / 0;
echo "End of File";
