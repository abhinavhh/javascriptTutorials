class Students{
    constructor(name,rollno,mark,total){
        this.name=name;
        this.rollno=rollno;
        this.mark=mark;
        this.total=total;
    }
    marksPercentage(){
        return `Marks percentage of ${this.name} is ${(this.mark/this.total)*100}`;
    }
}

//class for full mark students.
class FullMarks extends Students{//Inheritance
    constructor(name,rollno,total){
        super(name,rollno,total,total);
    }
}

//Students class.

const Student1=new Students("Suresh Somanathan",101,355,500);
console.log(Student1.rollno);
console.log(Student1.marksPercentage()+"%");

const Student2=new Students("Abhinand",102,450,500);
console.log(Student2.rollno);
console.log(Student2.marksPercentage()+"%");

//FUllMark students.

const Student3=new FullMarks("Abhinav U",103,500);
console.log(Student3.rollno);
console.log(Student3.marksPercentage()+"%");