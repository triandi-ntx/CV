/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
   
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function scalePortofolio(){
	document.body.classList.add('scale-portofolio')
}
function removeScale(){
	document.body.classList.remove('scale-portofolio')
}
window.addEventListener("load", () => {
    /* ----------- Page Loader ------------ */
    document.querySelector(".page-loader").classList.add("slide-out-right");
    setTimeout(() => {
      document.querySelector(".page-loader").style.display = "none";
    }, 2000);
  });
  
  
  /* ---------- Toggle Navbar ----------- */
  const navToggler = document.querySelector(".nav-toggler");
  navToggler.addEventListener("click", toggleNavbar);
  
  function toggleNavbar(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
    toggleOverlayEffect();
    toggleBodyScrolling();
  }
  
  /* ------------ Hide & Show Section ---------------*/
  document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
      const hash = e.target.hash;
      if(e.target.classList.contains("nav-item")){
        activeSection(hash);
        toggleNavbar();
      }
      else{
        toggleBodyScrolling();
        toggleOverlayEffect();
        document.querySelector(".nav-toggler").classList.add("toggle-hide");
        setTimeout(() => {
          activeSection(hash);
          toggleOverlayEffect();
          toggleBodyScrolling();
          document.querySelector(".nav-toggler").classList.remove("toggle-hide");
        }, 950)
      }
    }
  });
  
  function activeSection(sectionId){
    document.querySelector("section.active").classList.remove("active");
    document.querySelector(sectionId).classList.add("active");
    window.scrollTo(0,0);
  }
  
  /* --------- Toggle Overlay Effect ------------ */
  function toggleOverlayEffect(){
    document.querySelector(".overlay-effect").classList.toggle("active");
  }
  
  /* ---------- Toggle Body Scrolling ---------- */
  function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling");
  }
  
