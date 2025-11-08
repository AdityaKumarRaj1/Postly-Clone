
const pahila = document.getElementById("pahila"); //-------------------------------question
const dusra = document.getElementById("dusra");
const tisra = document.getElementById("tisra");
const chautha = document.getElementById("chautha");
const panchva = document.getElementById("panchva");
const chatha = document.getElementById("chatha");
const pahilapara = document.getElementById("pahila-paragraph");
const dusrapara = document.getElementById("dusra-paragraph");
const tisrapara = document.getElementById("tisra-paragraph");
const chauthapara = document.getElementById("chautha-paragraph");
const panchvapara = document.getElementById("panchva-paragraph");
const chathapara = document.getElementById("chatha-paragraph");
 const icon = document.getElementById('dark-light-mode');//------------------------dark mode
 
 //for question and answers
document.addEventListener("DOMContentLoaded", () => {
  pahila.addEventListener("click", (e) => {
    e.stopPropagation();
    pahilapara.classList.toggle("show");//--------------------------------------------pahila
    dusrapara.classList.remove("show");
      tisrapara.classList.remove("show");
        chathapara.classList.remove("show");
          panchvapara.classList.remove("show");
            chauthapara.classList.remove("show");
  });
  dusra.addEventListener("click", (e) => {
    e.stopPropagation();
    pahilapara.classList.remove("show");
    dusrapara.classList.toggle("show"); //----------------------------------------dusra
      tisrapara.classList.remove("show");
        chauthapara.classList.remove("show");
          panchvapara.classList.remove("show");
            chathapara.classList.remove("show");
  });
  
    tisra.addEventListener("click", (e) => {
    e.stopPropagation();
     tisrapara.classList.toggle("show"); //-----------------------------------------tisra
    pahilapara.classList.remove("show");
      dusrapara.classList.remove("show");
        chauthapara.classList.remove("show");
          panchvapara.classList.remove("show");
            chathapara.classList.remove("show");
  });

  chautha.addEventListener("click", (e) => {
    e.stopPropagation();
    pahilapara.classList.remove("show");
    chauthapara.classList.toggle("show"); //---------------------------------chautha
      dusrapara.classList.remove("show");
        tisra.classList.remove("show");
          panchvapara.classList.remove("show");
            chathapara.classList.remove("show");
  });
  panchva.addEventListener("click", (e) => {
    e.stopPropagation();
    pahilapara.classList.remove("show");
    panchvapara.classList.toggle("show"); //-----------------------------panchvapara
      dusrapara.classList.remove("show");
        chauthapara.classList.remove("show");
          tisrapara.classList.remove("show");
            chathapara.classList.remove("show");
  });

  chatha.addEventListener("click", (e) => {
    e.stopPropagation();
    chathapara.classList.toggle("show"); //------------------------------------chathapara
     pahilapara.classList.remove("show");
       dusrapara.classList.remove("show");
         tisrapara.classList.remove("show");
           chauthapara.classList.remove("show");
             panchvapara.classList.remove("show");
  });
});




// for dark theme
  icon.onclick = function() {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
      icon.src ="Images/sun icon.webp";
    }else{
      icon.src = "Images/moon-icon-png.webp";
    }
  }



  // for ham burger 
const Btnx = document.getElementById("Btn");
const modal = document.getElementById("modalopen");
const hamburger = document.getElementById("hamburger");

Btnx.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.toggle("open");
  hamburger.classList.toggle("hamburger-open");
});
document.addEventListener("click", (e) => {
  if (!Btnx.contains(e.target)) {
    modal.classList.remove("open");
    hamburger.classList.remove("hamburger-open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
    hamburger.classList.remove("hamburger-open");
  }
});




//

  const elements = document.querySelectorAll('.scroll-animate');

  function checkScroll() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight - 100;

      if (position < windowHeight) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);

