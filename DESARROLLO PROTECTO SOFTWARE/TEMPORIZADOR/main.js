let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let inputsContainer = document.getElementById("inputsContainer");
let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");
let startButton = document.getElementById("startButton");

let power = false;

const changeAction = () => {
    if (!power) startTimer();
    else stopTimer();
    power = !power;
}

let timerInterval;
let hoursCount = 0;
let minutesCount = 0;
let secondsCount = 0;
let totalSeconds = 0;

const startTimer = () => {
    const validationMessage = validateData(hoursCount, minutesCount, secondsCount);
    if (validationMessage === "valido") {
        inputsContainer.style.display = "none"
        timeToSeconds();
        hoursCount = concatZero(getHours());
        minutesCount = concatZero(getMinutes());
        secondsCount = concatZero(totalSeconds % 60);
        timerInterval = setInterval(() => {
            hoursCount = concatZero(getHours());
            minutesCount = concatZero(getMinutes());
            secondsCount = concatZero(totalSeconds % 60);
            if (totalSeconds > 0) {
                totalSeconds--;
                showTimer();
            } else {
                stopTimer();
            }
        }, 1000);
    } else {
        console.log(validationMessage);
    }
}

const stopTimer = () => {
    clearInterval(timerInterval);
    showTimer();
    inputsContainer.style.display = "flex";
}

const validateData = (hour, min, sec) => {
    if (hour >= 100) return "Las horas no pueden ser mayor a 100";
    else if (min >= 60) return "Los minutos no pueden ser mayor a 60";
    else if (sec >= 60) return "Los segundos no pueden ser mayor a 60";
    else if (hour < 0 || min < 0 || sec < 0) return "Ningun valor puede ser negativo";
    else return "valido";
}

const concatZero = (num) => {
    if (num < 10) {
        return parseInt(`0${num}`);
    }
    return num;
}

const showTimer = () => {
    hours.textContent = hoursCount;
    minutes.textContent = minutesCount;
    seconds.textContent = secondsCount;
}

const timeToSeconds = () => {
    totalSeconds = parseInt(secondsCount);
    totalSeconds += parseInt(minutesCount) * 60;
    totalSeconds += parseInt(hoursCount) * 3600;
}

const getHours = () => {
    return Math.floor(totalSeconds / 3600);
}

const getMinutes = () => {
    return Math.floor((totalSeconds % 3600) / 60);
}

startButton.addEventListener("click", (e) => {
    e.preventDefault();
    changeAction();
});
