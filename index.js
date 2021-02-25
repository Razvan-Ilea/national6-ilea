console.log("JavaScript - Async Programming");

document.addEventListener("click", onClick);


let counter = 0;
function onClick() {
    console.log('just a click');
    counter++;
    console.log('counter:', counter);
}
console.log('counter:', counter);

// the function is an anonymous function
setTimeout(function () {
    console.log('This is a code ran after 2 seconds');
}, 2000);

// this is similar to
setTimeout(setTimeoutFunction, 2000)

function setTimeoutFunction() {
    console.log('This is a code ran after 2 seconds');
}


setInterval(function () {
    console.log('ping');
}, 1000)