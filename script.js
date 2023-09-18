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