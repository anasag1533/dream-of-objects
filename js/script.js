var link1 = document.getElementById('navlink1');
var link2 = document.getElementById('navlink2');
var link3 = document.getElementById('navlink3');
var link4 = document.getElementById('navlink4');




link1.addEventListener('click',()=>
{   
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    link1.classList.add('active');
})

link2.addEventListener('click',()=>
{
    link1.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    link2.classList.add('active');
})

link3.addEventListener('click',()=>
{
    link1.classList.remove('active');
    link2.classList.remove('active');
    link4.classList.remove('active');
    link3.classList.add('active');
})

link4.addEventListener('click',()=>
{
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.add('active');
})


window.addEventListener('scroll',checkBoxes)



function checkBoxes () 
{
    console.log(window.innerHeight)
}

checkBoxes();