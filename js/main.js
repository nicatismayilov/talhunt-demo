let pricingCart1 = document.querySelector('#pricing-plan-1');
let pricingCart2 = document.querySelector('#pricing-plan-2');
let pricingCart3 = document.querySelector('#pricing-plan-3');
let pricingPlans = [pricingCart1, pricingCart2, pricingCart3];

pricingPlans.map( plan => {
      plan.addEventListener('mouseover', () => {
            pricingPlans.map( cart => {
                  if (cart === plan) {
                        cart.classList.contains('cart-active') ? {} : cart.classList.add('cart-active');
                  } else {
                        cart.classList.contains('cart-active') ? cart.classList.remove('cart-active') : {};
                  }
            })
      })
})

// ----------------------------------------------------------------------------

let feedbacks = document.querySelectorAll('.client-feedback-slider-item')
let slider = document.querySelector('.clients-feedback-slider-column');
let counter = 1;
let btnUp = document.querySelector('#btn-up');
let btnDown = document.querySelector('#btn-down');

btnUp.addEventListener('click', () => {
      if (counter <= 0) return;
      slider.style.transition = 'transform .6s ease-in-out';
      counter--;
      screen.width >= 768 
            ? slider.style.transform = `translateY(${-counter * 24.9}rem)`
            : slider.style.transform = `translateY(${-counter * 37}rem)`
})

btnDown.addEventListener('click', () => {
      if (counter >= feedbacks.length - 1) return;
      slider.style.transition = 'transform .6s ease-in-out';
      counter++;
      screen.width >= 768
            ? slider.style.transform = `translateY(${-counter * 24.9}rem)`
            : slider.style.transform = `translateY(${-counter * 37}rem)`;
})

slider.addEventListener('transitionend', () => {
      if (feedbacks[counter].id == 'last-feedback') {
            slider.style.transition = 'none';
            counter = feedbacks.length - 2;
            screen.width >= 768 
                  ? slider.style.transform = `translateY(${-counter * 24.9}rem)`
                  : slider.style.transform = `translateY(${-counter * 37}rem)`;
      } else if (feedbacks[counter].id == 'first-feedback') {
            slider.style.transition = 'none';
            counter = feedbacks.length - counter;
            screen.width >= 768
                  ? slider.style.transform = `translateY(${-counter * 24.9}rem)`
                  : slider.style.transform = `translateY(${-counter * 37}rem)`;
      }
})


// ----------------------------------------------------------------------------


let playBtn = document.querySelector('.play-btn');
let closeBtn = document.querySelector('.close-btn');
let watchLink = document.querySelector('.watch-link');
let modalWindow = document.querySelector('.modal-window');
playBtn.addEventListener('click', () => {
      modalWindow.style.display = 'flex';
})

watchLink.addEventListener('click', () => {
      modalWindow.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
      modalWindow.style.display = 'none';
})

let modalWindowVideo = document.querySelector('.modal-window-video');
let modalCloseBtn = document.querySelector('.close-btn');
let modalWindowContent = document.querySelector('.modal-window-content');


let stateActive = screen.width >= 768;
console.log(stateActive); 
let btnBurgerBox = document.querySelector('.burger-btn-box');
let btnBurger = document.querySelector('.burger-btn');
let navBtns = document.querySelector('.nav-btns-box');
btnBurgerBox.addEventListener('click', () => {
      stateActive = !stateActive;
      console.log(stateActive);
      if (stateActive) {
            btnBurger.classList.add('burger-btn-active');
            navBtns.style.display = 'flex';
            setTimeout(() => {
                  navBtns.style.right = '0';
            }, 100);
      } else {
            btnBurger.classList.remove('burger-btn-active');
            navBtns.style.right = '-100%';
            setTimeout(() => {
                  navBtns.style.display = 'none';
            }, 300);
      }
})

window.addEventListener('resize', () => {
      screen.width >= 768 ? 
            navBtns.style.display = 'flex' : 
            navBtns.style.display = 'none'

      screen.width >= 768 ?
            slider.style.transform = `translateY(${-24.9}rem)` :
            slider.style.transform = `translateY(${-37}rem)`
}, false);



