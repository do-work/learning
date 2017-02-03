function print(message) {
    document.write(message);
}

var questions = [
    ['What is my favorite color?', 'blue'],
    ['What language am I learning?', 'js'],
    ['What state do I live in?', 'fl']
];

var correctQty = 0;
var correctAns = [];
var incorrectAns = [];

for (var i = 0;i < questions.length; i++){
    var answer = prompt(questions[i][0]).toLowerCase();
    if (answer === questions[i][1]) {
        correctQty += 1;
        correctAns.push(questions[i][0]);
    } else {
        incorrectAns.push(questions[i][0]);
    }
}

print('You got <strong>' + correctQty + '</strong> right!');
print('<p>You answered the following questions correctly: <p>' +
    correctAns.join('<br/>'));
print('<p>You answered the following questions incorrectly..: <p>' +
    incorrectAns.join('<br/>'));