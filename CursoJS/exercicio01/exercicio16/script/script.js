
function run() {

    var inicio = Number(window.document.getElementById('inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var step = Number(window.document.getElementById('step').value)
    var resultado = window.document.getElementById('resultado')
    var contador = inicio
    resultado.innerHTML = ''
    var check = 0;
    while( check == 0 ) {

        if(step != 0) {

            if(inicio > fim){
                resultado.innerHTML += (((contador - step) <= fim) ? `&#128073;&#127998; ${contador} &#127937; `:`&#128073;&#127998; ${contador} /`)
                contador -= step
                if (contador == fim) {
                    check = 1;
                }
            } else {
                resultado.innerHTML += (((contador + step) >= fim) ? `&#128073;&#127998; ${contador} &#127937;`:`&#128073;&#127998; ${contador} /`)
                contador += step
                if(contador == fim) {
                    check =1;
                }
            }

            
        } else {
            resultado.innerHTML += 'erro inesperado'
            break
        }
        

    }


}