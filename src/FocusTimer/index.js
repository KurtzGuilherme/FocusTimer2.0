import state from '../state.js';
import * as timer from './timer.js'
import * as events from './events.js'

export function startTimer(minutes, seconds){

    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(minutes, seconds)
    
    events.registerTimerControls()
}