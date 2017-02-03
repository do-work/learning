/**
 * Created by david on 12/3/16.
 */

var counter = 0;
var wrong = 0;
var questions = [
    ["Is spain better than Czech republic?Answer with yes or no", "yes"],
    ["What is the biggest country in the world", "Russia"],
    ["What is the smallest country", "Baticano"]
];

var question1 = prompt(questions[0][0]);
var question2 = prompt(questions[1][0]);
var question3 = prompt(questions[2][0]);


if (questions[0][0] === questions[0][1]) {
    counter += 1;
} else {
    wrong += 1;
}
if (questions[1][0] === questions[0][1]) {
    counter += 1;
} else {
    wrong += 1;
}
if (questions[2][0] === questions[0][1]) {
    counter += 1;
} else {
    wrong += 1;
}
document.write("<h1>You got " + counter + "right,But you got " + wrong + "incorrect");