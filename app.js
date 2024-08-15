// Encriptación de texto
//Crear una función que encripte un texto.
//Conectar función a su respectivo botón en el HTML.
//Capturar el texto del input del HTML.
//La lógica de encriptación debe ser la siguiente: La letra "e" es convertida para "enter", la letra "i" es convertida para "imes", la letra "a" es convertida para "ai", la letra "o" es convertida para "ober", la letra "u" es convertida para "ufat".
//Debe funcionar solo con letras minúsculas
//No deben ser utilizados letras con acentos ni caracteres especiales
//Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
//Mostrar el texto encriptado en la pantalla.

function encriptar() {
  let texto = document.getElementById("entradaTexto").value;
  let encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("salidaTexto").innerHTML = encriptado;
}

const botonEncriptar = document.getElementById("encriptar");

botonEncriptar.addEventListener("click", encriptar);

const entradaTexto = document.getElementById("entradaTexto");
const noText = document.getElementById("noText");
const salidaTexto = document.getElementById("salidaTexto");

entradaTexto.addEventListener("input", function() {
    if (entradaTexto.value.trim() === "") {
        // Mostrar el contenedor de mensaje y ocultar el área de texto de salida y el botón de copiar
        noText.classList.remove("hidden");
        salidaTexto.classList.add("hidden");
        botonCopiar.classList.add("hidden");
    } else {
        // Ocultar el contenedor de mensaje y mostrar el área de texto de salida y el botón de copiar
        noText.classList.add("hidden");
        salidaTexto.classList.remove("hidden");
        botonCopiar.classList.remove("hidden");
    }
});

function desencriptar() {
  let texto = document.getElementById("entradaTexto").value;
  let desencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("salidaTexto").innerHTML = desencriptado;
}

const botonDesencriptar = document.getElementById("desencriptar");

botonDesencriptar.addEventListener("click", desencriptar);

function copiarTexto() {
  let texto = document.getElementById("salidaTexto").innerText;
  navigator.clipboard.writeText(texto).then(() => {
    console.log("Texto copiado al portapapeles");
  }).catch(err => {
    console.error("Error al copiar el texto: ", err);
  });
}

const botonCopiar = document.getElementById("copiar");

botonCopiar.addEventListener("click", copiarTexto);