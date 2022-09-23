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
//play.addEventListener('click', toggle_class('foo'))

function start(){
    
    if( controleButton == 1 ) {

        
        pause(controleButton)
        cron = setInterval(() => {timer(); }, 10);
        controleButton = 0;

        // INSERINDO OUTRO BOTÃO

        play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>'
        

    } else {
        pause(controleButton)
        controleButton = 1;
        play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>'
    }
};

function pause(controleButton) {

    clearInterval(cron);
    sideTop.innerHTML = ''
    if(controleButton == 0){
        
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
        })

        sideTop.appendChild(reset)
    } else {
        var btnAdd = window.document.createElement('button')
        btnAdd.setAttribute('class', 'add')
        btnAdd.setAttribute('type', 'button')

        sideTop.appendChild(btnAdd)
    }
    
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
