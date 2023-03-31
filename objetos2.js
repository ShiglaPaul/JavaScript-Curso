const user={
    name:'Alex',
    lastname:'perez',
    adress:{
        country:'Colombia',
        city:'Bogota'
    },
    friends:['Brandon','Elena'],
    sendMail(){
        return 'send email'
    },

};
console.log(user.adress);
console.log(user.sendMail())
console.log(user.friends[1])
//Manipulacion de DOM
const title=document.createElement('h1');
title.innerText='Hola mundo desde JS';
document.body.append(title);

const button=document.createElement('button');
button.innerText='click';
button.addEventListener('click',function() {
    title.innerText='Texto actualizado con js';
    alert('se realizo un click')
})
document.body.append(button);
//objeto como parametros, destructuring de objetos
const user1={
    name:'joe',
    age:19,
};
function printInfo(user1) {
    const{name,age}=user1;
    console.log(name,age);
    return "<h1>"+age+"</h1>";
    
}
console.log(printInfo(user1));
document.body.innerHTML=printInfo(user1);
//funciones anonimas
const button=document.createElement('button');
button.innerText='click me'
button.addEventListener('click',function() {
    alert('clicked')
})
document.body.append(button)