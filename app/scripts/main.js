import '../styles/main.scss';
import Header from './components/header';

class App {
    constructor(e) {
        console.log('init:', e);
        this.__init();
    }

    __init() {
        new Header();
    }
}

document.addEventListener('DOMContentLoaded', e => new App(e));
