//sample 1.

const marks=[350,450,500,400];
const marks_percentage=marks.map(marks=>(marks/500)*100 +"%");
console.log(marks_percentage);

//sample 2.

const students=[
    {rollno:100,name:"Abhinav",mark:350},
    {rollno:101,name:"Abhinand",mark:400},
    {rollno:102,name:"Adrash",mark:450}
]

const rollnos=students.map(student=>student.rollno);
console.log(rollnos);

//sample 3

const div=students.map(student=>`<div>${student.name}</div>`);
console.log(div);
