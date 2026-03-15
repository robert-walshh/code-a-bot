//  2026, Robert Walsh
//  Copy and Paste this into the MakeCode Micro:Bit Python Editor on your Web Browser
//  Micro:Bit Extensions Required: bluetooth
//  Services Required: LOFI Robots Telepresence Application


bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "UP") {
        basic.showArrow(ArrowNames.North)
        pins.servoSetPulse(AnalogPin.P1, 1700)
        pins.servoSetPulse(AnalogPin.P2, 1700)
    }
    
    if (receivedString == "DOWN") {
        basic.showArrow(ArrowNames.South)
        pins.servoSetPulse(AnalogPin.P1, 1300)
        pins.servoSetPulse(AnalogPin.P2, 1300)
    }
    
    if (receivedString == "LEFT") {
        basic.showArrow(ArrowNames.West)
        pins.servoSetPulse(AnalogPin.P1, 1700)
        pins.servoSetPulse(AnalogPin.P2, 1500)
    }
    
    if (receivedString == "RIGHT") {
        basic.showArrow(ArrowNames.East)
        pins.servoSetPulse(AnalogPin.P1, 1500)
        pins.servoSetPulse(AnalogPin.P2, 1700)
    }
    
    if (receivedString == "A") {
        pins.servoSetPulse(AnalogPin.P1, 1500)
        pins.servoSetPulse(AnalogPin.P2, 1500)
    }
    
    if (receivedString.substr(0, 1) == "x") {
        led.plotBarGraph(parseFloat(receivedString.substr(1, 3)), 180)
    }
    
    if (receivedString.substr(0, 1) == "c") {
        led.plotBarGraph(parseFloat(receivedString.substr(1, 3)), 180)
    }
    
})
let receivedString = ""
bluetooth.startUartService()
