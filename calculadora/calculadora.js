// ----------------------- VARIAVEIS HTML ----------------------

let box_input = window.document.getElementById('input__textMain')
// let soma = window.document.getElementById('button_somar')
// let subtracao = window.document.getElementById('button_subtrair')
// let multiplicacao = window.document.getElementById('button_multiplicacao')
// let divisao = window.document.getElementById('button_dividir')
let equal = window.document.getElementById("button_equal")
let resultado = window.document.getElementById("resultados")

// -------------------EVENTOS DE BOTÃO --------------------------

equal.addEventListener('click', equaldade)

function equaldade() {

    resultado.innerHTML = box_input.value
}