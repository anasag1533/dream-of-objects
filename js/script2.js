//we used active-2 instead of active
//because active is already used ;)


const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active-2');
    })
})

const removeActiveClasses = () => 
{
    panels.forEach(panel => {
        panel.classList.remove('active-2');
    })
}