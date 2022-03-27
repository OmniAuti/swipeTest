const container = document.querySelector('.container')
const displayStart = document.querySelector('.display-start')
const display = document.querySelector('.display')


//let movement = 0;
container.addEventListener('touchstart', (e) => {
    const startX = e.touches[0].clientX
    displayStart.innerHTML = startX
})
container.addEventListener('touchmove', (e) => {
  //  movement += 25;
    //container.style.transform = `translateX(-${movement}%)`
    let x = e.touches[0].clientX
    display.innerHTML = x
    
})
