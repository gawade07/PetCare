

let menuBTN=document.getElementById('menuBTN');



menuBTN.addEventListener('click',()=>{
let ul =document.querySelector('ul');

ul.classList.toggle('ulToggle')
menuBTN.classList.toggle('bx-x')
});

