const nav = document.querySelector('#nav');
const navbtn = document.querySelector('#nav-btn');
const navimg = document.querySelector('#nav-btn-img');

navbtn.onclick = () =>{
    if(nav.classList.toggle('open')) {
        navimg.src ="./img/Icons/nav-close.svg";


    } else {
        navimg.src ="./img/Icons/nav-open.svg";

}

}

AOS.init({
    disable: 'phone'
   /* once: true */

});

