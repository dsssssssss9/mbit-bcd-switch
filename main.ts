function Calc_Total () {
    basic.pause(100)
    Total = 1 * pins.digitalReadPin(DigitalPin.P1) + 2 * pins.digitalReadPin(DigitalPin.P2) + (4 * pins.digitalReadPin(DigitalPin.P5) + 8 * pins.digitalReadPin(DigitalPin.P8))
}
let Total = 0
basic.showIcon(IconNames.Scissors)
Total = 0
let Old_Total = -1
let text_list = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"A",
"B",
"C",
"D",
"E",
"F"
]
basic.forever(function () {
    basic.pause(100)
    Calc_Total()
    while (Total != Old_Total) {
        basic.showString("" + (text_list[Total]))
        Old_Total = Total
    }
})
