const Hours_input_selector = '#hour'
const Minute_input_selector = '#minute'
const Sec_input_selector = '#sec'
const ButtonStart_selector = '.button_start'
const ButtonStop_selector = '.button_stop'

const Hours_input = document.querySelector(Hours_input_selector)
const Minute_input = document.querySelector(Minute_input_selector)
const Sec_input = document.querySelector(Sec_input_selector)
const ButtonStart = document.querySelector(ButtonStart_selector)
const ButtonStop = document.querySelector(ButtonStop_selector)

let hours 
let minutes 
let seconds

let remaning_time
let interval

function start(event) {
    event.preventDefault()
    hours = parseInt(Hours_input.value)
    minutes = parseInt(Minute_input.value)
    seconds = parseInt(Sec_input.value)
    remaning_time = 3600 * hours + 60 * minutes + seconds 
    change_hide()
    document.documentElement.requestFullscreen()
    // update()
    // for(let i = remaning_time; i>0; i--) {
        
    // }
    interval = setInterval(update, 1000)
    setTimeout(function(){
        ButtonStop.style.opacity = 0.1
    }, 2000)
}
function stop() {
    clearInterval(interval)
    change_hide()
    document.exitFullscreen()
}
function update() {
    remaning_time = remaning_time - 1
    hours = Math.floor(remaning_time / 3600)
    minutes = Math.floor(remaning_time % 3600 / 60)
    seconds = Math.floor(remaning_time % 60)
    Hours_input.value = hours.toString().padStart(2,0)
    Minute_input.value = minutes.toString().padStart(2,0)
    Sec_input.value = seconds.toString().padStart(2,0)
    if (remaning_time == 0) {
        stop()
    }

}
ButtonStart.addEventListener('click', start)
ButtonStop.addEventListener('click', stop)

function change_hide() {
    ButtonStart.classList.toggle('hide')
    ButtonStop.classList.toggle('hide')
}