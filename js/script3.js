const counters = document.querySelectorAll('.counter');



counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => 
    {   
        //adding + converts string to number 
        const target = +counter.getAttribute('data-target');

        const c = +counter.innerText;

        const increment = target / 100000;

        if(c < target)
        {
            counter.innerText = `${Math.ceil(c + increment)}`

            setTimeout(updateCounter,1);
        }
        else
        {
            counter.innerText = target;
        }
    }

    //get containers position

    const elementPosition = counter.offsetTop;

    window.addEventListener('scroll',()=>
    {   
        console.log(window.scrollY);
        if(window.scrollY >= 1800)
        {
            updateCounter();
        }
    })
})