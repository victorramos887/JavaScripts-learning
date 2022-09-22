
function run() {

    var inicio = Number(window.document.getElementById('inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var step = Number(window.document.getElementById('step').value)
    var resultado = window.document.getElementById('resultado')
    var contador = inicio
    resultado.innerHTML = ''

    while( contador < Number(fim) ) {

        if(step != 0) {

            if(inicio > fim){
                
            }

            
        } else {
            resultado.innerHTML += 'erro inesperado'
            break
        }
        

    }


}