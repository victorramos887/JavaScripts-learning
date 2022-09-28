const request = new XMLHttpRequest();

request.open('GET', 'http://192.168.1.199:8085/SelectAll');
request.send();

request.onload = ()=>{
    if(request.status === 202) {
        console.log(JSON.parse(request.response));
        console.log('ABERTO')
    } else {
        console.log(`ERRO ${request.status}`)
    }
}