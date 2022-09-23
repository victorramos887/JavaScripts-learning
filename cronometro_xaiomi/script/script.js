let minutes = 0;
let second = 0;
let milisecond = 0;

var smilisecond = window.document.getElementById('miliseconds');
var ssecond = window.document.getElementById('seconds');
var sminutes = window.document.getElementById('minutes');


// SVG

//SET DIV
var sideTop = window.document.getElementById('side__top')

//BUTTON 
var play = window.document.getElementById('play');
var cron;
var controleButton = 1;

// ATRIBUIR FUNÇÕES
play.addEventListener("click", start);
play.addEventListener('click', toggle_class('foo'))

function start(){
    
    if( controleButton == 1 ) {

        sideTop.innerHTML = ''
        pause()
        cron = setInterval(() => {timer(); }, 10);
        controleButton = 0;

        // INSERINDO OUTRO BOTÃO
        var reset = window.document.createElement("button")
        reset.setAttribute('class', 'reset')
        reset.setAttribute('type', 'button')

        reset.addEventListener('click', function reset() {

            minutes = 0;
            second = 0;
            milisecond = 0;
        
            smilisecond.innerText = '00';
            ssecond.innerText = '00';
            sminutes.innerText = '00';
            pause();
            sideTop.innerHTML = ''
            play.appendChild(svgPlay)
          })

        sideTop.appendChild(reset)

    } else {
        pause()
        controleButton = 1;
    }
};

function pause() {
    clearInterval(cron);
}

function timer() {
    if((milisecond += 10)==1000) {

        milisecond = 0;
        second ++;
    }

    if(second == 60) {
        second = 0;
        minutes ++
    }

    if(minutes==60) {
        second = 0;
        minutes = 0;
        milisecond = 0;
    }
    
    smilisecond.innerText = returnData(milisecond)
    ssecond.innerText = returnData(second)
    sminutes.innerText = returnData(minutes)
    
}
// function pause() {

// };



function returnData(input) {
    return input >= 10 ? input:`0${input}`
}
