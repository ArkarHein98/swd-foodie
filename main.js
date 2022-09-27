import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";

let options = {
    strings: ['Food ...', 'Drink ...'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 3000,
    loop: true
  };
  
  let typed = new Typed('.element', options);


  let toDown = {
    distance: '50px',
    origin: 'top',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-down', toDown);


let toRight = {
    distance: '50px',
    origin: 'left',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-right', toRight);


let toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-left', toLeft);

