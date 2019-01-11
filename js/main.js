let menuBlock = document.querySelector('.nav-main'),
    menuButton = document.querySelector('.menu-responsive'),
    menuButtonClose = document.querySelector('.menu-responsive-close'), 
    menuHref = document.querySelectorAll('.nav-main ul li a');

menuButton.addEventListener('click', function() {
    menuBlock.classList.add('show');
});

menuButtonClose.addEventListener('click', function() {
    menuBlock.classList.remove('show');
});

for(let i = 0; i < menuHref.length; i++) {
    menuHref[i].addEventListener('click', function() {
        menuBlock.classList.remove('show');
    });
};