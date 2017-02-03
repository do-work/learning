/**
 * Created by david on 11/3/16.
 */

var questions = [
    ['What is my favorite color?', 'blue'],
    ['What language am I learning?', 'js'],
    ['What state do I live in?', 'fl']
];
var correctQty = 0;
var correctAns = [];
var incorrectAns = [];

function screenWrite(message) {
    var write = document.getElementById('output');

    write.innerHTML = message;
}

function buildUp(arr) {
    var build = '<ol>';

    for (var i = 0; i < arr.length; i++) {
        build += '<li>' + arr[i] + '</li>';
    }
    build += '</ol>';
    return build;
}

function loop(questions) {
    var question;
    var answer;
    var response;

    for (var i = 0; i < questions.length; i++) {
        question = questions[i][0];
        answer = questions[i][1];
        response = prompt(question);
        if (response === answer) {
            correctQty += 1;
            correctAns.push(question);
        } else {
            incorrectAns.push(question);
        }
    }
}

function testResults(qty,correct,incorrect) {
    var html;

    html = 'You got <strong>' + qty + '</strong> right!';
    html += '<h2>You answered the following questions correctly: </h2>';
    html += buildUp(correct);
    html += '<h2>You answered the following questions incorrectly: </h2>';
    html += buildUp(incorrect);
    screenWrite(html);

}

loop(questions);
testResults(correctQty, correctAns, incorrectAns);

