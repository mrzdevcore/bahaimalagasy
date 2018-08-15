export class Header {
    constructor() {
        this.__init();
        this.__removeTransparency();
    }

    __removeTransparency() {
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                const position = window.pageYOffset;
                if (position > header.offsetHeight) {
                    header.classList.remove('transparent');
                }
                else {
                    header.classList.add('transparent');
                }
            });
        }
    }

    __init() {
        const t = document.querySelector('.js-humberger');
        const subMenu = document.querySelector('.nav-mobile');
        t.addEventListener('click', e => {
            e.preventDefault();
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
            }
            else {
                subMenu.classList.add('show');
            }
        });
        document.addEventListener('click', e => {
            if (e.target !== t) {
                subMenu.classList.remove('show');
            }
        });
    }
}

export default Header;
