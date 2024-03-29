const myform=document.querySelector('#main');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('.last');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter values';
        setTimeout(()=>msg.remove(),1000);
    }
    else{
        const h1=document.createElement('h1');
        h1.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));

        userList.appendChild(h1);

        //clear Fields

        nameInput.value='';
        emailInput.value='';
    }
}
