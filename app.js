const container = document.querySelector('.container')
const displayStart = document.querySelector('.display-start')
const display = document.querySelector('.display')
const displayCheck = document.querySelector('.display-check')


let movement = 0;
container.addEventListener('touchstart', (e) => {
    const startX = e.touches[0].clientX
    displayStart.innerHTML = startX
})
container.addEventListener('touchmove', (e) => {
    movement += 25;
    //container.style.transform = `translateX(-${movement}%)`
    const startX = e.touches[0].clientX
    displayStart.innerHTML = startX
    let x = e.touches[0].clientX
    display.innerHTML = x 
    container.addEventListener('touchend', () => {
        movement += 25;
        if (x < startX) {
            displayCheck.innerHTML = 'Got it'
            container.style.transform = `translateX(-${movement}%)`
        }
    })
   
})

