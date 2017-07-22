
var students = [
    {name:'david', track:'js', achievements:1000 , points:1001  },
    {name:'jen', track:'java', achievements:1000 , points:1001 },
    {name:'ben', track:'html', achievements:10 , points:11 },
    {name:'ken', track:'ruby', achievements:100 , points:101 },
    {name:'heather', track:'css', achievements:100 , points:101 }
];

function screenWrite(message) {
    var write = document.getElementById('output');

    write.innerHTML = message;
}

function getReport(student) {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    return report;
}

while(true){
    var search = prompt('Search student records: type a name [name] (or type "quit" to end)').toLowerCase();
    if (search === null || search === 'quit'){
        break;
    } else {
        for (var i = 0; i < students.length; i++) {
            var student = students[i];
            if (student.name === search) {
                screenWrite(getReport(student));
                break;
            } else {
                screenWrite('Sorry that student does not exist..');
            }

        }
    }
}





