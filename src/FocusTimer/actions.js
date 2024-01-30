import state from "../state.js";
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running')

    timer.updateDisplay();
}

export function increaseTime() {
    if (isNaN(el.minutes.textContent))
        return;

    let minutes = Number(el.minutes.textContent)

    minutes = minutes + 5;
    timer.updateDisplay(minutes)
}

export function decreaseTime(){
    if (isNaN(el.minutes.textContent))
        return;

    let minutes = Number(el.minutes.textContent)

    if(minutes <  5){
        minutes = 0
    }
    else{
        minutes = minutes - 5
    }

    timer.updateDisplay(minutes)
}