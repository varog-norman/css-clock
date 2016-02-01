'use strict';

window.addEventListener('DOMContentLoaded', handler);

function handler() {
    var date = new Date();
    setTime(date);
    setTimeout(handler, 1000);
}

function setTime(date) {
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var timeUnit = ['hours', 'minutes', 'seconds'];

    timeUnit.forEach( (elem, i) => {
        var cell = document.getElementById(elem);

        if(cell.parentNode.scrollTop) {
            cell.children[0].innerHTML = cell.children[1].innerHTML;
            cell.parentNode.scrollTop = 0;
        }

        document.getElementById(elem).children[1].innerHTML =
            `${parseInt(time[i] / 10)}${time[i] % 10}`;

        if(cell.children[0].innerHTML != cell.children[1].innerHTML) {
            animate(cell);
        }
    });
}

function checkTime() {
    var timeUnit = ['hours', 'minutes', 'seconds'];
    timeUnit.forEach( (elem, i) => {
        var cell = document.getElementById(elem);
        if(cell.children[0].innerHTML != cell.children[1].innerHTML) {
            cell.children[0].innerHTML = cell.children[1].innerHTML;
        }
    });
}

function animate(elem) {
    elem.classList.toggle('scroll-top');
    setTimeout( () => {
        elem.classList.toggle('scroll-top');
        checkTime();
    }, 999)
}
