/* Menu Show */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    menu = document.getElementById(navId);

    if(toggle && menu){
        toggle.addEventListener("click", () => {
            menu.classNameList.toggle("show");
        });
    };
};

showMenu("nav-toggle", "nav-menu");


/* Remove menu */
const navLink = document.querySelectorAll(".nav__link"),
    navMenu = document.getElementById("nav-menu");

function linkAction(){
    navMenu.classNameList.remove("show");
};

navLink.forEach(n => n.addEventListener("click", linkAction));


/* Scroll Section  Active Header */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classNameList.add("active");
            }else{
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classNameList.remove("active");
            };
    });
};


/* Change Color Header */
window.onscroll = () => {
    const nav = document.getElementById("header")
    if(this.scrollY >=200) nav.classNameList.add("scroll-header"); 
    else nav.classNameList.remove("scroll-header");
};