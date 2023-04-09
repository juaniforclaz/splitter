let total = document.getElementById("total");
let newTotal = document.getElementById("newTotal");
let resultadoTotal = document.getElementsByClassName("resultado");
let personas = document.getElementById("personas");
let newPersonas = document.getElementById("newPersonas");

total.addEventListener("input", showTotal);
personas.addEventListener("input", showPersonas);

function showTotal(e) {
  cantTotal = newTotal.textContent = e.target.value;
}

function showPersonas(e) {
  cantPersonas = newPersonas.textContent = e.target.value;
  totalPorPersona = newTotal.textContent / newPersonas.textContent;
  newPersonas.innerHTML = totalPorPersona;
}
