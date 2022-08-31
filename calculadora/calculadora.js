// let igual = window.document.getElementById('igual')
// let resultados_testes = window.document.getElementById('testes_de_resultados')
// igual.addEventListener('click', somar)

// var operadores = ['+', '-', '*', '/']

// function somar() 
// {

//     var caixa_input = window.document.getElementsByClassName('input_valores')
// var valores = caixa_input[0].value.splitMulti()

//     resultados_testes.innerHTML = valores[0]
// }


// }

function splitMulti(str, spliters) {
    let string_ = str[0]
    console.log(spliters.length)
    for (var i = 0; i < spliters.length; i++) {

        for(x in spliters) {
            console.log(x)   
        }

    }

}

console.log('Não foi enviado')
var operadores = ['+', '-', '*', '/']
console.log(splitMulti('2+5+8+5-6', spliters = operadores))