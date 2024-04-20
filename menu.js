let abrirMenu = document.getElementById('abrir_menu');
let menu = document.getElementById('menu_mob');

abrirMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir');
});


window.addEventListener('resize', function() {
    clearTimeout(resizeTimer); 
    
    resizeTimer = setTimeout(() => {
        var menu_mob = document.querySelector('.menu_mob');
        
        if (window.innerWidth >= 769 && menu_mob.classList.contains('abrir')) {
            menu_mob.classList.remove('abrir'); 
        } else if (window.innerWidth < 769 && !menu_mob.classList.contains('abrir')) {
            menu_mob.classList.add('abrir'); 
        }
    }, 250);
});

