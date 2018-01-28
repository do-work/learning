<?php

class QueryBuilder
{
    protected $db_connection;

    public function __construct($db_connection)
    {
        $this->db_connection = $db_connection;
    }

    public function selectAll($table, $intoClass)
    {
            $statement = $this->db_connection->prepare("SELECT * FROM {$table}");
            $statement->execute();
            return $statement->fetchAll(PDO::FETCH_CLASS, $intoClass);
    }
}