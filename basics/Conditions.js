const x=10;
if(x===10){
    console.log('x is 10');
}
//o/p is 'x is 10'

if(x==10){
    console.log('x is 10');
}
// o/p is 'x is 10'
//if 10 is a string  

const y='10'
if(y===10){
    console.log('y is 10');
}
// o/p is not correct because its checks for data type
// if(y==='10') is the correct way

else{
    console.log('read comment');
}
if(y!=10){
    console.log('y is 10');
}
// o/p is 'y is 10'
else if(x==10){
    console.log(`${x}`);
}
else{
    console.log(`error`);
}

//switch case

const color=x<10? 'red':'blue';
switch(color){
    case 'red':
        console.log('switch color is red');
        break;
    case 'blue':
        console.log('switch color is blue');
        break;
    default:
        console.log('error');
        break;
}