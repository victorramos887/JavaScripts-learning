
// let hour = 0;
// let minute = 0;
// let second = 0;
// let millisecond = 0;

// let cron;

// document.form_main.start.onclick = () => start();
// document.form_main.pause.onclick = () => pause();
// document.form_main.reset.onclick = () => reset();

//var buttonStart = window.document.getElementById('iniciar')
// var buttonPause = window.document.getElementById('pause')
// var buttonReset = window.document.getElementById('resetar')

//buttonStart.addEventListener('click', debug)
// buttonPause.addEventListener('click', pause)
// buttonReset.addEventListener('click', reset)

function debug(){
    // var valor = window.document.getElementById('debug')

    // valor.innerHTML += 'ativo'
    alert('Alerrt')
}

// function start() {
//   pause();
//   cron = setInterval(() => { timer(); }, 10);
// }

// function pause() {
//   clearInterval(cron);
// }

// function reset() {
//   hour = 0;
//   minute = 0;
//   second = 0;
//   millisecond = 0;
//   document.getElementById('time__hora').innerText = '00';
//   document.getElementById('time__minutos').innerText = '00';
//   document.getElementById('time__segundos').innerText = '00';
//   document.getElementById('time__milisegundos').innerText = '000';
// }

// function timer() {
//   if ((millisecond += 10) == 1000) {
//     millisecond = 0;
//     second++;
//   }
//   if (second == 60) {
//     second = 0;
//     minute++;
//   }
//   if (minute == 60) {
//     minute = 0;
//     hour++;
//   }
//   document.getElementById('time__hora').innerText = returnData(hour);
//   document.getElementById('time__minutos').innerText = returnData(minute);
//   document.getElementById('time__segundos').innerText = returnData(second);
//   document.getElementById('time__milisegundos').innerText = returnData(millisecond);
// }

// function returnData(input) {
//   return input >= 10 ? input : `0${input}`
// }