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

    var valor_digitado = separador(String(box_input.value))

    resultado.innerHTML = valor_digitado.numeros
    console.log(valor_digitado.caracteres)

}

function separador(lista_split) {

    // var sep = ['~', '-', '+', '*'];

    var number = lista_split.split(/[/+*-]+/);
    
    for(i = 0; i < length(lista_split); i++) {
        var caracteres = lista_split.charAt(i)

        if caracteres;
    }

    return {"numeros":number,"caracteres":caracteres};

}
