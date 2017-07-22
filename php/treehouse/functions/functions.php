<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 6/7/17
 * Time: 9:02 AM
 */

//function hello($arr) {
//    if (is_array($arr)) {
//        foreach($arr as $name){
//            echo "Hello, $name! How is it going?<br>";
//        }
//    } else {
//        echo 'Hello, friends!';
//    }
//}
//
//$names = array(
//    'Hampton',
//    'Mike',
//    'Charlie',
//);
//hello($names);

//function get_info($name, $title = Null){
//    if($title){
//        echo "$name has arrived. They are with us as a $title.";
//    } else {
//        echo "$name has arrived, welcome!";
//    }
//
//}
//
//get_info('Mike', 'Frog');

//function answer(){
//    return 42;
//}
//
//function add_up($a, $b){
//    return $a + $b;
//}
//
//$func = 'add_up';
//
//$num = $func(5, 10);
//echo $num;

$name = 'David';
$greet = function() use($name){
    echo "Hello, $name";
};

$greet();


