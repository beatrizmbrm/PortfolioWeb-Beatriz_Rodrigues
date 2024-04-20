let abrirMenu = document.getElementById('abrir_menu');
let menu = document.getElementById('menu_mob');

abrirMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir');
});


window.addEventListener('resize', function() {
    var menu_mob = document.querySelector('.menu_mob');
    if (window.innerWidth >= 769) {
        menu_mob.classList.remove('abrir'); 
    } else {
        menu_mob.classList.add('abrir'); 
    }
});

window.dispatchEvent(new Event('resize'));
