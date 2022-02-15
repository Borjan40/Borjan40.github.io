
(() => {

    const menuButton = document.querySelector('.button-services');
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('serv_icon-menu_open');
    });

    const buttonMenuMobile = document.querySelector('.button-mobile-general-menu');
    const menuMobile = document.querySelector('.mobile-general-menu');
    buttonMenuMobile.addEventListener('click', () => {
        // let expanded = menuButton.getAttribute('aria-expanded') === 'true';
        // console.log(expanded)
        // menuButton.setAttribute('aria-expanded', !expanded);
        menuMobile.classList.toggle('mobile-general-menu_open');
        menu.classList.toggle('mobile-general-menu_open');
    });

    const menuClose = document.querySelector('.mobile-general-menu_cross-icon');
    const menu = document.querySelector('.menu');
    menuClose.addEventListener('click', () => {
        menu.classList.toggle('mobile-general-menu_open');
        menuMobile.classList.toggle('mobile-general-menu_open');
    });

})();
