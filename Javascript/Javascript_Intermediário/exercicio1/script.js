const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")

let value = document.querySelector(".value")
let count = 0;

increment.addEventListener("click", function() {
  count ++
  value.innerHTML = count
})

decrement.addEventListener("click", function() {
  count --
  value.innerHTML = count
})