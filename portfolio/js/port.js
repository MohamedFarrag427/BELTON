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

//==================================================================
// Recent Menu
let recentMenu = document.querySelectorAll('.recent-list li'),
    recentArray = Array.from(recentMenu),
    showAll = document.querySelector('.recent-list .item1'),
    strategy = document.querySelector('.recent-list .item2'),
    digital = document.querySelector('.recent-list .item3'),
    art = document.querySelector('.recent-list .item4'),
    allImg = document.querySelectorAll('.recent .recent-picture');



showAll.onclick = (e) => {
    recentArray.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');

    allImg.forEach((a) => {
        if(a.classList.contains('box1') || a.classList.contains('box2') || a.classList.contains('box3')){
            a.classList.remove('desplaying');
            a.classList.add('show');
        }
    });
};
    
strategy.onclick = (e) => {
    recentArray.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');

    allImg.forEach((a) => {
        if(a.classList.contains('box3') || a.classList.contains('box2')){
            a.classList.add('desplaying');
            a.classList.add('show');
        }else{
            a.classList.remove('desplaying');
        };
    });
};


digital.onclick = (e) => {
    recentArray.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');

    allImg.forEach((a) => {
        if(a.classList.contains('box1') || a.classList.contains('box3')){
            a.classList.add('desplaying');
            a.classList.add('show');
        }else{
            a.classList.remove('desplaying');
        };
    });
};

art.onclick = (e) => {
    recentArray.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');

    allImg.forEach((a) => {
        if(a.classList.contains('box2') || a.classList.contains('box1')){
            a.classList.add('desplaying');
            a.classList.add('show');
        }else{
            a.classList.remove('desplaying');
        };
    });
};


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