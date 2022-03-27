const container = document.querySelector(".container");
const displayStart = document.querySelector(".display-start");
const display = document.querySelector(".display");
const displayCheck = document.querySelector(".display-check");

let movement = 0;
let startX;
let moveX;

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  displayStart.innerHTML = startX;
});

displayCheck.innerHTML = "Newest of the update";
container.addEventListener("touchmove", (e) => {
  moveX = e.touches[0].clientX;
  display.innerHTML = moveX;
});

container.addEventListener("touchend", () => {
  if (movement >= 100) {
    movement = 100;
  } else if (movement <= 0) {
    movement = 0;
  }

  if (moveX < startX) {
    movement += 25;
    setTimeout(() => {
      container.style.transform = `translateX(-${movement}%)`;
    }, 100);
  }
  if (moveX > startX) {
    movement -= 25;
    setTimeout(() => {
      container.style.transform = `translateX(-${movement}%)`;
    }, 100);
  }
});
