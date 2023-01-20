//Bar Menu
let clickMenu = document.querySelector('.header-menu'),
    boxMenu = document.querySelector('.menu-box'),
    listMenu = document.querySelector('.menu-box ul'),
    spanMenu = document.querySelectorAll('.header-menu span');
    
    

clickMenu.onclick = (e) => {
    boxMenu.classList.toggle('left');

    setTimeout(() => {
        listMenu.classList.toggle('hidden');
    }, 150);

    spanMenu.forEach((s) => {
        s.classList.toggle('color-menu');
        s.classList.toggle('close-bar');
    });

    // stop propagation on button
    e.stopPropagation();
}

boxMenu.onclick =(e) => {
    // stop propagation on button
    e.stopPropagation();
}

document.onclick = (e) => { // document =  anywhere
    if(e.target !== clickMenu &&e.target !== boxMenu ){
        
        // check open clss is found or not

        if(boxMenu.classList.contains('left')){
            boxMenu.classList.toggle('left');

            setTimeout(() => {
                listMenu.classList.toggle('hidden');
            }, 150);

            spanMenu.forEach((e) => {
                e.classList.toggle('color-menu');
                e.classList.toggle('close-bar');
            });
        }
        
    }
}

//=========================================================================
// change color text onscroll
let headerText = document.querySelector('.header-text');

window.onscroll = () => {
        if(window.pageYOffset >= 100){
            headerText.style.color = "#ffffff85";
        }else{
            headerText.style.color = "white";
        }
}

// effect text onload
window.onload = () => {
    setInterval(() => {
        headerText.classList.remove('hidden');
    }, 150);
    headerText.classList.add('top');
}

//=========================================================================
//scrollTop
let scrollClick = document.querySelector('.scroll-top');

window.onscroll = () => {

    if(window.pageYOffset >= 1400){
        scrollClick.classList.remove('hidden');
    }else{
        scrollClick.classList.add('hidden');
    };

    scrollClick.onclick = () => {
        window.scrollTo({
            top: 0 ,
            behavior: "smooth"
        });

    };

};

