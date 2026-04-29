//  2026, Robert Walsh
//  Copy and Paste this into the MakeCode Micro:Bit Python Editor on your Web Browser
//  Micro:Bit Extensions Required: bluetooth
//  Services Required: LOFI Robots Teachable Micro:Bit
//  Teachable Machine Sample Model URL:
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
})
let receivedString = ""
bluetooth.startUartService()
basic.forever(function on_forever() {
    if (receivedString == "go") {
        pins.servoSetPulse(AnalogPin.P1, 1300)
        pins.servoSetPulse(AnalogPin.P2, 1300)
    } else if (receivedString == "stop") {
        pins.servoSetPulse(AnalogPin.P1, 1500)
        pins.servoSetPulse(AnalogPin.P2, 1500)
    } else if (receivedString == "reverse") {
        pins.servoSetPulse(AnalogPin.P1, 1700)
        pins.servoSetPulse(AnalogPin.P2, 1700)
    } else if (receivedString == "nothing") {
        pins.servoSetPulse(AnalogPin.P1, 1500)
        pins.servoSetPulse(AnalogPin.P2, 1500)
    }
    
})
