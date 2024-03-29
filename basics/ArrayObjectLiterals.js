const todo=[
    {
        id:1,
        text:'read',
        iscomplete:true
    },
    {
        id:2,
        text:'play',
        iscomplete:false
    },
    {
        id:3,
        text:'code',
        iscomplete:true
    }
];

console.log(todo);


//print text of second list i todo is it completed or not

console.log(todo[1].text);

if (todo[1].iscomplete==true) {
    console.log("Task completed");
} else {
    console.log("Task is incomplete");
}

//JSON Format

const todoJSON=JSON.stringify(todo);
console.log(todoJSON);

for(let i=0;i<todo.length;i++){
    console.log(todo[i].text);
}

for(let t of todo){
    console.log(t.id);
}

//for Each, map , filter

todo.forEach(function(t){
    console.log(t.text);
});

const todos = todo.map(function(t){
   return t.text
});
console.log(todos);

// const todoComp=todo.filter(function(t){
//     return t.iscomplete===true;
// });
// console.log(todoComp);

//filter and map together

const todoComp=todo.filter(function(t){
    return t.iscomplete===true;
}).map(function(t){
    return t.text;
})

//this will return the text of list which are completed
console.log(todoComp);
