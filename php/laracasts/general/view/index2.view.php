<html lang="en">
<head>
    <title>Testing 1,2,3</title>
    <link rel="stylesheet" type="text/css" href="view/default.css">
</head>
<body>

<header>
    <h1>
        Animal list
    </h1>
</header>

<ul>
    <?php foreach ($animals as $name) : ?>
        <li><?= $name->name; ?></li>
    <?php endforeach; ?>

</ul>

<header>
    <h1>
        Task list
    </h1>
</header>

<ul>
    <?php foreach ($tasks as $task) : ?>
        <li>
            <?php if ($task->completed) : ?>
                <strike> <?= $task->description; ?> </strike>
            <?php else: ?>
                <?= $task->description; ?>
            <?php endif; ?>
        </li>
    <?php endforeach; ?>
</ul>

<!--<ul>-->
<!--    <li>-->
<!--        <strong>Name: </strong> --><? //= $task['title']; ?>
<!--    </li>-->
<!---->
<!--    <li>-->
<!--        <strong>Due Date: </strong> --><? //= $task['due']; ?>
<!--    </li>-->
<!---->
<!--    <li>-->
<!--        <strong>Person Responsible: </strong> --><? //= $task['assigned_to']; ?>
<!--    </li>-->
<!---->
<!--    <li>-->
<!--        <strong>Status: </strong>-->
<!--        --><?php //if ($task['completed']) : ?>
<!--            <span class="icon">&#9989;</span>-->
<!--        --><?php //else : ?>
<!--            <span class="icon">Incomplete</span>-->
<!--        --><?php //endif ?>
<!--    </li>-->
<!--</ul>-->

</body>
</html>
