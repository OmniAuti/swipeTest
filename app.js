const container = document.querySelector('.container')
const display = document.querySelector('.display')


console.log(container)
let movement = 0;
container.addEventListener('touchmovement', (e) => {
  //  movement += 25;
    //container.style.transform = `translateX(-${movement}%)`
    const x = e.touches[0].clientX
    display.innerHTML = x
})
