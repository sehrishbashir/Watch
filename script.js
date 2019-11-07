let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;

function updateTime() {
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
            hours++;
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }
    updateUI();
}

function updateUI() {
    if (seconds < 10) {
        document.querySelector('#seconds').innerHTML = "0" + seconds;
    } else {
        document.querySelector('#seconds').innerHTML = seconds;
    }
    if (minutes < 10) {
        document.querySelector('#minutes').innerHTML = "0" + minutes;
    } else {
        document.querySelector('#minutes').innerHTML = minutes;
    }
    if (hours < 10) {
        document.querySelector('#hours').innerHTML = "0" + hours;
    } else {
        document.querySelector('#hours').innerHTML = hours;
    }
}

function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    stop();
    updateUI();
}



