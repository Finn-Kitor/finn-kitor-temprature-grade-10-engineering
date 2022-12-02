let current_temprature = 0
basic.forever(function () {
    current_temprature = input.temperature()
    basic.showNumber(current_temprature)
    basic.pause(1000)
    basic.clearScreen()
})
