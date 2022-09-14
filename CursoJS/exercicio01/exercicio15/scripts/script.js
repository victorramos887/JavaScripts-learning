function funcao() {

    var data = new Date(window.document.getElementById("date__nascimento").value)
    var debug = window.document.getElementById("debug")
    var dias = (1000*60*60*24);
    data_atual = new Date()
    var diasdevida = (data_atual.getTime() - data.getTime())/dias

    debug.innerHTML = data
    debug.innerHTML += '<br>'
    debug.innerHTML += data_atual + '<br>'
    
    debug.innerHTML += diasdevida
}