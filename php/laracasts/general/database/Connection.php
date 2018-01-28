<?php

//todo - make this into an implementation
Class Connection
{
    public static function make($config)
    {
        try {
            return new PDO(
                $config['connection'] . ';dbname=' . $config['name'],
                $config['username'],
                $config['password'],
                $config['options']
            );

        } catch (PDOException $e) {
            // todo - make this into a exception
            die($e->getMessage());
        }
    }
}