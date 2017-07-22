var questions = [
    new Question("What code are you learning?", ["javascript", "java"],
        "javascript"),
    new Question("How old am I?", ["21", "29"], "29")

];

var quiz = new Quiz(questions);

QuizUI.displayNext();