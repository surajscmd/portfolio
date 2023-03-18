/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click' , ()=>{
            nav.classList.toggle('show-menu')
        })
    }

}
showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/

const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach( n =>  {
    n.addEventListener('click', linkAction)
});


/*---scroll section active link----*/

/*--const sections = document.querySelectorAll("section[id]");

window.addEventListener('scroll', scrollActive)

function scrollActive(){
   

    const scrollY = window.pageYOffset

    sections.forEach(current => {
        
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.OffsetTop - 50;
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        }else{
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}---*/


const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
      

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navigation a[href*='" + sectionId + "']").classList.add("active-link");
           
        }else{
            document.querySelector(".navigation a[href*='" + sectionId + "']").classList.remove("active-link");
        }
    });
}

window.addEventListener('scroll', scrollActive)



/*--------- change background header -------*/

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader)


/*===== SHOW SCROLL TOP =====*/ 

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else header.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollTop)



/*===== MIXITUP FILTER PORTFOLIO =====*/ 


/* Link active portfolio */ 

const swiper = new Swiper('.swiper', {
    // Optional parameters
   spaceBetween:16,
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        3285:{
            slidesPerView: 3,
        },
    }
    
  });


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 

gsap.from('.home__img',{opacity: 0, duration:2 ,delay:0.5, x:60})
gsap.from('.home__data',{opacity: 0, duration:2 ,delay:0.9, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button',{opacity: 0, duration:1 ,delay:2, y:25,ease:'expo.out', stagger:0.2})
gsap.from('.nav__logo, .nav__toggle',{opacity: 0, duration:2 ,delay:1.5, y:25,ease:'expo.out', stagger:0.2})
gsap.from('.nav__items',{opacity: 0, duration:2 ,delay:1.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.home_social-icon',{opacity: 0, duration:2 ,delay:2.5, y:25,ease:'expo.out', stagger:0.2})