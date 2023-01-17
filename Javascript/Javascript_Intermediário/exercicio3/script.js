const states = document.querySelector("#states")
const form = document.querySelector("#form")
let citys = document.querySelector(".citys")

let haveError = false;

form.onsubmit = function(e) {
  e.preventDefault()
  let inputStates = document.forms['form']['states']
  let inputCitys = document.forms['form']['citys']

  if(!inputStates.value) {
    haveError = true;
    inputStates.classList.add('inputError')
    let span = inputStates.nextSibling.nextSibling
    span.innerText = "Preencha o campo corretamente"
  } else {
    inputStates.classList.remove('inputError')
    let span = inputStates.nextSibling.nextSibling
    span.innerText = ""
  }

  if(!inputCitys.value) {
    haveError = true;
    inputCitys.classList.add('inputError')
    let span = inputCitys.nextSibling.nextSibling
    span.innerText = "Preencha o campo corretamente"
  } else {
    inputCitys.classList.remove('inputError')
    let span = inputCitys.nextSibling.nextSibling
    span.innerText = ""
  }

}


const sp = 
  {
  city_1: "Jundiaí",
  city_2: "Campinas",
  city_3: "Limeira",
  city_4: "Atibaia"
  }


const rj = 
  {
  city_1: "Teresópolis",
  city_2: "Resende",
  city_3: "Maricá",
  city_4: "Macaé"
  }


function citysSP() {
    citys.innerHTML = `
    <label id="citys">Cidades</label>
    <select name="citys">
      <option value="">--Selecione a cidade--</option>
      <option value="">${sp.city_1}</option>
      <option value="">${sp.city_2}</option>
      <option value="">${sp.city_3}</option>
      <option value="">${sp.city_4}</option>
    </select>
    <span class="error"></span>
  `
}

function citysRj() {
  citys.innerHTML = `
  <label id="citys">Cidades</label>
  <select name="citys">
    <option value="">--Selecione a cidade--</option>
    <option value="">${rj.city_1}</option>
    <option value="">${rj.city_2}</option>
    <option value="">${rj.city_3}</option>
    <option value="">${rj.city_4}</option>
  </select>
  <span class="error"></span>
`
}

states.addEventListener("change", function() {
  if (states.value === "sp") {
    citysSP()
  } else {
    citysRj()
  }
})
