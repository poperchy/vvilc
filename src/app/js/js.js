function mainMenu() {
    const navButton = document.querySelector('.nav__button');
    const navList = document.querySelector('.nav__list');
    const body = document.querySelector('body');

    navButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (navList.classList.contains('nav__list--active')) {
            navList.classList.remove('nav__list--active');
            body.style.overflow = '';
        } else {
            navList.classList.add('nav__list--active');
            body.style.overflow = 'hidden';
        }
    })
}

mainMenu();