const totalInput = document.getElementById("total");
const propinaInput = document.getElementById("propina");
const personasInput = document.getElementById("personas");
const newTotalOutput = document.getElementById("newTotal");
const newPersonasOutput = document.getElementById("newPersonas");
const compartirButton = document.getElementById("compartir");
const resultadoTexto = document.getElementById("resultadoTexto");

function calcularPropina() {
  const total = parseFloat(totalInput.value);
  const propina = parseFloat(propinaInput.value);
  const personas = parseFloat(personasInput.value);

  // Validar que los valores sean números
  if (isNaN(total) || isNaN(propina) || isNaN(personas)) {
    newTotalOutput.textContent = "---";
    newPersonasOutput.textContent = "---";
    resultadoTexto.value = "";
    return;
  }

  const propinaCalculada = total * (propina / 100);
  const totalConPropina = total + propinaCalculada;
  const totalPorPersona = totalConPropina / personas;

  newTotalOutput.textContent = totalConPropina.toFixed(2);
  newPersonasOutput.textContent = totalPorPersona.toFixed(2);

  // Generar texto a copiar para compartir
  const texto = `El valor total es: $${total.toFixed(
    2
  )}\nEl porcentaje de propina es: ${propina}%\nEl valor total con propina es: $${totalConPropina.toFixed(
    2
  )}\nEl valor total por persona es: $${totalPorPersona.toFixed(2)}`;
  resultadoTexto.value = texto;
}

totalInput.addEventListener("input", calcularPropina);
propinaInput.addEventListener("input", calcularPropina);
personasInput.addEventListener("input", calcularPropina);

// Función para copiar el texto generado al portapapeles
function copiarTexto() {
  resultadoTexto.select();
  resultadoTexto.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("El texto ha sido copiado correctamente!");
}

compartirButton.addEventListener("click", copiarTexto);
