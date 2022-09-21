
function load(){

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var body = window.document.body

    var data = new Date()
    var hora = data.getHours()
    // var hora = 11
    var minutos = data.getMinutes()


    msg.innerHTML = `Agora são <strong>${hora}:${minutos} </strong> horas`

    if(hora >= 0 && hora < 12){

        img.src = 'imagens/manha.png'
        body.style.background = 'rgb(93, 87, 80)'

    } else if(hora < 18) {

        img.src = 'imagens/tarde.png'
        body.style.background = 'rgb(82, 41, 11)'

    } else {

        img.src = 'imagens/noite.png'
        body.style.background = 'rgb(24, 18, 28)'
    }
}

