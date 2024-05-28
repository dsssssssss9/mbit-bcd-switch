input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Total = 1 * pins.digitalReadPin(DigitalPin.P1) + 2 * pins.digitalReadPin(DigitalPin.P2) + (4 * pins.digitalReadPin(DigitalPin.P5) + 8 * pins.digitalReadPin(DigitalPin.P8))
    basic.showNumber(Total)
})
let Total = 0
basic.showIcon(IconNames.Heart)
Total = 0
basic.forever(function () {
	
})
