import state from "../state.js";
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function forest() {
    state.isMusic = el.forest.classList.toggle("enable")
    
    if (state.isMusic) {
        sounds.forest.play()
        state.isMusic = true
    }
    else{
        sounds.forest.pause()
        state.isMusic = false
    }

    el.rain.classList.remove("enable")
    el.fire.classList.remove("enable")
    el.shop.classList.remove("enable")

    sounds.rain.pause()
    sounds.fire.pause()
    sounds.rain.pause()
}

export function rain() {
    state.isMusic = el.rain.classList.toggle("enable")
    
    if (state.isMusic) {
        sounds.rain.play()
        state.isMusic = true
    }
    else {
        sounds.rain.pause()
        state.isMusic = false  
    }

    el.forest.classList.remove("enable")
    el.fire.classList.remove("enable")
    el.shop.classList.remove("enable")

    sounds.forest.pause()
    sounds.fire.pause()
    sounds.shop.pause()
}

export function shop() {
    state.isMusic = el.shop.classList.toggle("enable")

    if (state.isMusic) {
        sounds.shop.play()
        state.isMusic = true
    }
    else {
        sounds.shop.pause()
        state.isMusic = false
    }

    el.forest.classList.remove("enable")
    el.rain.classList.remove("enable")
    el.fire.classList.remove("enable")

    sounds.forest.pause()
    sounds.rain.pause()
    sounds.fire.pause()
}

export function fire() {
    state.isMusic = el.fire.classList.toggle("enable")

    if (state.isMusic) {
        sounds.fire.play()
        state.isMusic = true
    }
    else {
        sounds.fire.pause()
        state.isMusic = false
    }

    el.forest.classList.remove("enable")
    el.rain.classList.remove("enable")
    el.shop.classList.remove("enable")

    sounds.forest.pause()
    sounds.shop.pause()
    sounds.rain.pause()
}
