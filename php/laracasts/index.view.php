<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Testing 1,2,3</title>
    <style>
        h1 {
            background: #e3e3e3;
            padding: 1em;
            text-align: center;
        }
    </style>
<!--    <script src="/treehouse/js/quiz.js"></script>-->
</head>
<body>

<div id="test">

</div>

<h1>
    <?= $greeting; ?>
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
agecheck(22);
?>

</body>
</html>



