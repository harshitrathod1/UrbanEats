/*==================== SHOW MENU ====================*/
const showMenu = (toggleId,navMenuId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navMenuId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MOBILE MENU ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n =>  n.addEventListener('click',linkAction));

/*==================== ADD scroll header effect ====================*/
function scrollHeaderEffect(){
    const nav = document.getElementById('header');
    if(this.scrollY>=200) 
    {
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeaderEffect);
/*==================== Activate Scroll top ====================*/
function scrollTopActivate(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560){
        scrollTop.classList.add('scroll-top-visible');
    }else{
        scrollTop.classList.remove('scroll-top-visible');
    }
}
window.addEventListener('scroll',scrollTopActivate);