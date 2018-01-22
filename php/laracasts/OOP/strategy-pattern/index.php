<?php

interface Logger
{
    public function log($data);
}

class LogToFile implements Logger
{
    public function log($data)
    {
        var_dump('Log the data to a file: ' . $data);
    }
}

class LogToDatabase implements Logger
{
    public function log($data)
    {
        var_dump('Log the data to the database: ' . $data );
    }
}

class LogToXWebService implements Logger
{
    public function log($data)
    {
        var_dump('Log the data to a Sass site:' . $data);
    }
}

class App
{
    public function log($data, Logger $logger = null)
    {
        $logger = $logger ?: new LogToFile();
        $logger->log($data);
    }
}

$app = new App();
$app->log('Some information here', new LogToDatabase());
