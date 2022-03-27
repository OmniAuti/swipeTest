const container = document.querySelector('.container')
const displayStart = document.querySelector('.display-start')
const display = document.querySelector('.display')
const displayCheck = document.querySelector('.display-check')


let movement = 0;
/*container.addEventListener('touchstart', (e) => {
    const startX = e.touches[0].clientX
    displayStart.innerHTML = startX
})*/

displayCheck.innerHTML = 'New update'
container.addEventListener('touchmove', (e) => {
    movement += 25;
    //container.style.transform = `translateX(-${movement}%)`
    const startX = e.touches[0].clientX
    displayStart.innerHTML = startX
    let x = e.touches[0].clientX
    display.innerHTML = x 
  
    if (x < startX) {
        movement += 25;
        displayCheck.innerHTML = 'Got it'
        container.style.transform = `translateX(-${movement}%)`
    }
   
})
/*
container.addEventListener('touchend', (e) => {
    movement += 25;
    displayCheck.innerHTML = 'Got it'
    container.style.transform = `translateX(-${movement}%)`
})*/