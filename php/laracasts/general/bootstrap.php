<?php

$config = require 'config.php';
require 'src/functions.php';
require 'database/Connection.php';
require 'database/QueryBuilder.php';
require 'src/Task.php';

return new QueryBuilder(Connection::make($config['database']));