const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Function to create pairs of students
function createPairs(students) {
    const girls = [];
    const boys = [];

    for (let i = 0; i < students.length; i++) {
        const element = students[i];
        if (element.slice(-1) === 'а') {
            girls.push(element);
        } else {
            boys.push(element);
        }
    }

    const studentsPairs = [];
    for (let i = 0; i < girls.length; i++) {
        const studentsPairsI = [];
        studentsPairsI.push(girls[i], boys[i]);
        studentsPairs[i] = studentsPairsI;
    }

    return studentsPairs;
}

let pairs = createPairs(students);
console.log(pairs);
document.writeln(pairs + "<br>");

//2. Add themes pairs are working on

function addTheme(pairs) {
    const addStudentsTheme = [];
    for (let i = 0; i < pairs.length; i++) {
        let studentsPair = pairs[i].join(' і ');
        let theme = [];
        theme.push(studentsPair);
        theme.push(themes[i]);
        addStudentsTheme[i] = theme;
    }

    return addStudentsTheme;
}
let theme = addTheme(pairs);
console.log(theme);
document.writeln(theme + "<br>");

//3.Add marks for students

function addMarks(students) {
    const studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        let container = [];
        container.push(students[i]);
        container.push(marks[i]);
        studentsMarks[i] = container;
    }
    return studentsMarks;
}

let journal = addMarks(students);
console.log(journal);
document.writeln(journal + "<br>");

// 4. Random marks for projects

function addRandomMarks(theme) {
    const randomMarks = [];

    for (let i = 0; i < theme.length; i++) {
        randomMarks[i] = [...theme[i], Math.floor(Math.random() * 5 + 1)];

    }

    return randomMarks;
}

let projects = addRandomMarks(theme);
console.log(projects);
document.writeln(projects + "<br>  <b>More info in Console</b>");



