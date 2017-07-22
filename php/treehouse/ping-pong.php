<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 6/4/17
 * Time: 5:10 PM
 */

$player1 = 0;
$player2 = 5;
$round = 0;
//var_dump(abs($player1 - $player2));
//var_dump($player2 - $player1);

//WIN
// must reach 11 to win and be at least 2 points higher than opponent
while (abs($player1 - $player2) < 2 || ($player1 < 11 && $player2 < 11)) {
    $round++;
    echo "<h2>Round $round</h2>\n";
    if (rand(0,1)) {
        $player1++;
    } else {
        $player2++;
    }
    echo "Player 1 = $player1<br>\n";
    echo "Player 2 = $player2<br>\n";
}

echo "<h1>";
if ($player1 > $player1) {
    echo "Player1";
} else {
    echo "Player2";
}
echo " is the winner after $round rounds!</h2>\n";