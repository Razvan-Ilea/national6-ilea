console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', start)

const stopButton = document.getElementById('stop-btn');
stopButton.addEventListener('click', stop);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', reset);

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', save);


function start() {
        result = setInterval(function () {
            renderDigits(seconds, secondsParagraphs);
            renderDigits(minutes, minutesParagraphs);
            renderDigits(hours, hoursParagraphs);
            
            seconds++;
            
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            
            if (hours === 24) {
                hours = 0;
            }
        }, 1000)

        return result
}


function stop() {
    clearInterval(result)
}


function reset() {
    clearInterval(result)
    seconds = 0;
    secondsParagraphs[0].innerText = 0;
    secondsParagraphs[1].innerText = 0;

    minutes = 0;
    minutesParagraphs[0].innerText = 0;
    minutesParagraphs[1].innerText = 0;

    hours = 0;
    hoursParagraphs[0].innerText = 0;
    hoursParagraphs[1].innerText = 0;

//     better option
//     renderDigits(seconds, secondsParagraphs);
//     renderDigits(minutes, minutesParagraphs);
//     renderDigits(hours, hoursParagraphs);
}


function save() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('digital-clock')

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('hours')
  const pHoursOne = document.createElement('p');
  const pHoursTwo = document.createElement('p');
  hoursDiv.appendChild(pHoursOne);
  hoursDiv.appendChild(pHoursTwo);

  const minutesDiv = document.createElement('div');
  minutesDiv.classList.add('minutes')
  const pMinutesOne = document.createElement('p');
  const pMinutesTwo = document.createElement('p');
  minutesDiv.appendChild(pMinutesOne);
  minutesDiv.appendChild(pMinutesTwo);

  const secondsDiv = document.createElement('div');
  secondsDiv.classList.add('seconds')
  const pSecondsOne = document.createElement('p');
  const pSecondsTwo = document.createElement('p');
  secondsDiv.appendChild(pSecondsOne);
  secondsDiv.appendChild(pSecondsTwo);

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(hoursDiv);
  mainDiv.appendChild(minutesDiv);
  mainDiv.appendChild(secondsDiv);
  
  pHoursOne.innerText = hoursParagraphs[0].innerText;
  pHoursTwo.innerText = hoursParagraphs[1].innerText + ':';
  pMinutesOne.innerText = minutesParagraphs[0].innerText;
  pMinutesTwo.innerText = minutesParagraphs[1].innerText + ':';
  pSecondsOne.innerText = secondsParagraphs[0].innerText;
  pSecondsTwo.innerText = secondsParagraphs[1].innerText;

//  better option 
//  const clock = document.querySelector('.digital-clock')
//  const clockCopy = clock.cloneNode(true);
//  document.body.appendChild(clockCopy);
}

function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}