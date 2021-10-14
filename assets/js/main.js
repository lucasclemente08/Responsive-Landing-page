const navMenu = document.getElementById('nav-menu');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close');

/* mostrar menu 
 validar si la constante existe*/

 if(navToggle){
      navToggle.addEventListener('click',()=>{
          navMenu.classList.add('show-menu')
    })
  }

  /* Ocultar menu
 validar si la constante existe*/


 if(navClose){
      navClose.addEventListener('click', () =>{
          navMenu.classList.remove('show-menu')
      })
  }
   /*Remover Menu Mobile*/

   const navLink = document.querySelectorAll('.nav__link')

   function linkAction(){
         const navMenu = document.getElementById('nav-menu')

         navMenu.classList.remove('show-menu')
   }
   navLink.forEach(n => n.addEventListener('click',linkAction))


  /* ------------ SCROLl SCETION ACTIVE LINK -------------*/
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


  /* ------------ CONTACT-------------*/
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
