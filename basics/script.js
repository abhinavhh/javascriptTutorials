// //single Element
// const form=document.getElementById('main');
// console.log(form);


// //queryselector
// console.log(document.querySelector('.container'));//or we can write h1 ,div , #id using this

// //Multiple Element

// //queryselectorAll to select list of elements under a tag
// console.log(document.querySelectorAll('.label'))

// //Class selector
// console.log(document.getElementsByClassName('btn'));

// //TagName selector
// console.log(document.getElementsByTagName('input'));

// //looping tags

// const items=document.querySelectorAll('label');
// items.forEach((item)=> console.log(item));


//********************************/

//changing the dom

// const ul=document.querySelector('.label');

// ul.remove();//removes the tag with class name label

// ul.lastElementChild.remove();//last child under .label is removed 'input btn'

//ul.firstElementChild.textContent='hi';//text of fist child is changed 'Name to hi'

// ul.firstElementChild.innerHTML='<h1>text</h1>'; //change the name of fist child 'Name to text with h1

//********************* */
const butt=document.querySelector('.btn');
butt.style.background='red';//change color of button background

//Event listner

butt.addEventListener('click',(e) => {
    console.log('click');
    console.log(e.target);//returns details of the tag
    //change something when clicking 

    document.querySelector('.container2').style.background='yellow';//backgroung of the div is  changed when clicking

    document.querySelector('.label').firstElementChild.innerHTML='<h1>Text</h1>';
});
// we can use mouseover instead of click which works like hover

