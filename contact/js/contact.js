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
//show and hide placeholder / click supmit

let userName = document.getElementById('user'),
    email = document.getElementById('mail'),
    boxArea = document.getElementById('text-area'),
    clickSubmit = document.getElementById('send');


function showAndHide (item) {
    let holderText = item.placeholder;
    item.onfocus = () => {
        item.placeholder= "";
    }

    item.onblur = () => {
        item.placeholder=holderText;
    }
}

showAndHide(userName);
showAndHide(email);
showAndHide(boxArea);


// clickSubmit.onclick = () => {
    
// }


//=======================================================================
