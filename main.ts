function Calc_Total () {
    Total = 1 * pins.digitalReadPin(DigitalPin.P1) + 2 * pins.digitalReadPin(DigitalPin.P2) + (4 * pins.digitalReadPin(DigitalPin.P5) + 8 * pins.digitalReadPin(DigitalPin.P8))
}
input.onButtonPressed(Button.B, function () {
	
})
let Total = 0
basic.showIcon(IconNames.Skull)
Total = 0
let Old_Total = -1
basic.forever(function () {
    Calc_Total()
    while (Total != Old_Total) {
        basic.showNumber(Total)
        Old_Total = Total
    }
})
