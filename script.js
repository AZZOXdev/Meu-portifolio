//menu hamburguer//
function MenuShow(){
 let menuMobile = document.querySelector('.mobile-menu');
 if (menuMobile.classList.contains('open')){
     menuMobile.classList.remove('open')
     document.querySelector('.M_icon').src = "Imagens/menu_white_36dp.png"
 }
 else{
   menuMobile.classList.add('open')
     document.querySelector('.M_icon').src = "Imagens/close_white_36dp.png"
 }
}

// fim menu hamburger//

//botao up//

const btn = document.getElementById('btnTop')

btn.addEventListener('click', function(){
  window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)

function ocultar (){
  if(window.scrollY > 10){
    btn.style.display = "flex"
  }
  else{
    btn.style.display = "none"
  }
}

ocultar()
//fim botao up//