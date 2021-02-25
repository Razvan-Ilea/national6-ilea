console.log('JavaScript - Digital Clock');

let seconds = 0;
let minutes = 0;
let hours = 0;

const secondParagraph = document.querySelectorAll('.seconds p');
const minuteParagraph = document.querySelectorAll('.minutes p');
const hoursParagraph = document.querySelectorAll('.hours p');

setInterval(function() {
    renderDigits(seconds, secondParagraph);
    renderDigits(minutes, minuteParagraph);
    renderDigits(hours, hoursParagraph);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++
        
    };

    if (minutes === 60) {
        minutes = 0;
        hours++
    };

    if (hours === 24) {
        hours = 0;
    }
}, 1)

function renderDigits(nr, pList) {
    const stringDigit = nr + "";
    const digitList = stringDigit.split("");

    if (digitList.length === 2) {
        pList[1].innerText = digitList[1];
        pList[0].innerText = digitList[0];
    } else {
        pList[0].innerText = 0;
        pList[1].innerText = digitList[0];
    }
}


