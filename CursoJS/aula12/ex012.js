var agora = new Date();
var hora = agora.getHours()

if(hora > 0 && hora <=5) {

    console.log('Boa Madrugada!!!')

} else if(hora < 12) {

    console.log('Bom dia!!!')

} else if(hora < 18){

    console.log('Boa tarde')

} else {

    console.log('Boa noite!!!')

}