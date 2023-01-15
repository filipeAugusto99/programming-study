const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const stop = document.querySelector(".stop")

let value = document.querySelector(".value")
let count = 0;
let interval = 0;

decrement.addEventListener("click", function() {
  clearInterval(interval)
  stop.classList.remove("color-stop")
  increment.classList.remove('active')
  decrement.classList.add('disable')
  interval = setInterval(() => {
    count --
    value.innerText = count
  }, 100)
})

increment.addEventListener("click", function() {
    clearInterval(interval)
    stop.classList.remove("color-stop")
    decrement.classList.remove('disable')
    increment.classList.add('active')
    interval = setInterval(() => {
    count ++
    value.innerText = count
  }, 100)
})

stop.addEventListener("click", function() {
  clearInterval(interval)
  decrement.classList.remove('disable')
  increment.classList.remove('active')
  stop.classList.add("color-stop")
})