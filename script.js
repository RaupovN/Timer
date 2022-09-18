let min = 00;
let seconds = 00;
let tens = 00;
let getMins = document.querySelector('.min');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

function startFunc() {
    interval = setInterval(startTimer, 10)
    document.querySelector('.btn-start').disabled = 'true';
}

function stopFunc() {
    document.querySelector('.btn-start').disabled = '';
    clearInterval(interval);
}

function resetFunc() {
    document.querySelector('.btn-start').disabled = '';
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    min = '00';
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
    getMins.innerHTML = min;
}


function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        min++;
        getMins.innerHTML = '0' + min;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (min > 9) {
        getMins.innerHTML = min;
    }
}