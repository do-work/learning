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
        <li><?= $name; ?></li>
    <?php endforeach; ?>

</ul>

<header>
    <h1>
        Task list
    </h1>
</header>

<ul>
    <?php foreach ($task as $task => $val) : ?>
        <li><strong><?= $task; ?></strong> <?= $val; ?></li>
    <?php endforeach; ?>

</ul>

</body>
</html>
