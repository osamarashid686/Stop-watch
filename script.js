let Milisec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;

    Milisec = 0;
    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById("Milisec").innerHTML = "00";
    document.getElementById("Sec").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    document.getElementById("Hr").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        Milisec +=1;

    if (Milisec == 99) {
        sec +=1;
        Milisec = 0;
    }
    if (sec == 59) {
        min +=1;
        sec = 0;
    }
    if(min == 59){
        hr += 1;
        min = 0;
    }

    var strMilisec = Milisec;
    var strsec = sec;
    var strmin = min;
    var strhr = hr;

    if(Milisec < 10){
        strMilisec = "0" + strMilisec;
    }
    if(sec < 10){
        strsec = "0" + strsec;
    }
    if(min < 10){
        strmin = "0" + strmin;
    }
    if(hr < 10){
        strhr = "0" + strhr;
    }

    document.getElementById("Milisec").innerHTML = strMilisec;
    document.getElementById("Sec").innerHTML = strsec;
    document.getElementById("Min").innerHTML = strmin;
    document.getElementById("Hr").innerHTML = strhr;
    setTimeout("stopwatch()",5);
    }
}