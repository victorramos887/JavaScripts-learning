function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var resultado = window.document.getElementById("resultado")
    var anoDigitado = window.document.getElementById("txtyear")

    if(anoDigitado.value.length == 0 || Number(anoDigitado) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(anoDigitado.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'picture')

        if(fsex[0].checked) {
            
            genero='Homem'

    

            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', `./imagens/h_crianca.png`)
            } else if(idade <21) {
                //Jovem
                img.setAttribute('src', './imagens/h_jovem.png')
            } else if(idade < 45){
                //adulto
                img.setAttribute('src', './imagens/h_adulto.png')
            } else {
                //velho
                img.setAttribute('src', './imagens/h_velho.png')
            }

        } else{
            genero='Mulher'

            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './imagens/m_crianca.png')
            } else if(idade <21) {
                //Jovem
                img.setAttribute('src', './imagens/m_jovem.png')
            } else if(idade < 45){
                //adulto
                img.setAttribute('src', './imagens/m_adulta.png')
            } else {
                //velho
                img.setAttribute('src', './imagens/m_velha.png')
            }
        }


        resultado.style.textAlign = 'center'
        resultado.innerHTML = `idade = ${idade}` 
        resultado.innerHTML += genero
        resultado.appendChild(img)
    }

}