let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
    if (pins.analogReadPin(AnalogPin.P0) < 600) {
        basic.showIcon(IconNames.Happy)
    } else if (pins.analogReadPin(AnalogPin.P0) > 600 && pins.analogReadPin(AnalogPin.P0) < 850) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
