<?php

$greeting = 'Hello, here is a list of our animals:';

$animals = [
    'Amdi',
    'Winkster',
    'Fuzz',
    'Ellie',
    'Xander',
    'Chubbs'

];

$task = [
    'title' => 'do laundry',
    'due' => 'sunday',
    'assigned_to' => 'David',
    'completed' => false
];

?>
<html>
<head>
    <title>Testing 1,2,3</title>
    <link rel="stylesheet" href="default.css">
</head>
<body>


<h1>
    <?php echo $greeting; ?>
</h1>
<ul>
    <?php foreach ($animals as $name) : ?>
        <li><?= $name; ?></li>
    <?php endforeach; ?>
</ul>

<h1>Task Of The Day</h1>
<ul>
    <li>
        <strong>Name:</strong> <?= $task['title']; ?>
    </li>

    <li>
        <strong>Due Date:</strong> <?= $task['due']; ?>
    </li>

    <li>
        <strong>Person Responsible</strong> <?= $task['assigned_to']; ?>
    </li>

    <li>
        <strong>Status:</strong>
        <?php
        if ($task['completed']) : ?>
            <span class='icon'>&#10004;</span>
        <?php else : ?>
            <span class='icon'>&#10005;</span>
        <?php endif; ?>
    </li>
</ul>

<h1>Are you old enough to have a drink?</h1>
<?php

use \Laracasts\TestFunctions;

$test = new TestFunctions();
$test->agecheck(22);
?>

</body>
</html>



