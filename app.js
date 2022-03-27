const container = document.querySelector('.container')
const displayStart = document.querySelector('.display-start')
const display = document.querySelector('.display')
const displayCheck = document.querySelector('.display-check')


let movement = 0;
let startX;
let moveX;

container.addEventListener('touchstart', (e) => {
    const startX = e.touches[0].clientX
    displayStart.innerHTML = startX
})

displayCheck.innerHTML = 'Newest of the update'
container.addEventListener('touchmove', (e) => {
    movement += 25;
    //container.style.transform = `translateX(-${movement}%)`
    moveX = e.touches[0].clientX
    display.innerHTML = moveX 
})

container.addEventListener('touchend', () => {
    if (moveX < startX) {
        movement += 25;
        displayCheck.innerHTML = 'Got it'
        container.style.transform = `translateX(-${movement}%)`
    }
})