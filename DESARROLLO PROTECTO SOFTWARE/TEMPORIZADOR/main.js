let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");
let startButton = document.getElementById("startButton");

let power = false;
const changeAction = ()=>{
    if(power == false) startTimer();
    else stopTimer();
    power = !power;
}

change = true;
minutesInput.addEventListener("input", ()=> change = !change)
secondsInput.addEventListener("input", ()=> change = !change)


const insertInputValue = ()=>{
    minutesCount = minutesInput.value;
    secondsCount = secondsInput.value;
}

let timerInterval;
let minutesCount = 0;
let secondsCount = 0;
const startTimer = ()=>{
    if(change == true) insertInputValue();
    if(validateData(minutes.textContent, seconds.textContent) == "error") alert("Debes ingresar un numero valido")
    else{
        minutesCount = concatZero(minutesCount);
        timerInterval = setInterval(()=>{
            if(secondsCount == 00){
                minutesCount--;
                minutesCount = concatZero(minutesCount);
                secondsCount = 59;
            }
            else{
                secondsCount--;
                secondsCount = concatZero(secondsCount);
            }
            showTimer();
            if(minutesCount == 00 && secondsCount == 00) stopTimer();
        },1000);
    }
}

const stopTimer = ()=>{
    clearInterval(timerInterval);
    showTimer();
}


const validateData = (min, sec) => {
    if (min < 0 || sec < 0 || min >= 60 || sec >= 60) {
        return "error";
    }
}

const concatZero = (num)=>{
    if(num < 10){
        num = `0${num}`;
        return parseInt(num);
    }
}

const showTimer = ()=>{
    seconds.textContent = secondsCount;
    minutes.textContent = minutesCount;
}

startButton.addEventListener("click", changeAction);