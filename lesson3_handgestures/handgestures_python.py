# 2026, Robert Walsh
# Copy and Paste this into the MakeCode Micro:Bit Python Editor on your Web Browser
# Micro:Bit Extensions Required: bluetooth
# Services Required: LOFI Robots Teachable Micro:Bit

def on_uart_data_received():
    global receivedString
    receivedString = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

receivedString = ""
bluetooth.start_uart_service()

def on_forever():
    if receivedString == "fast":
        pins.servo_set_pulse(AnalogPin.P1, 2000)
        pins.servo_set_pulse(AnalogPin.P2, 2000)
    elif receivedString == "slow":
        pins.servo_set_pulse(AnalogPin.P1, 1700)
        pins.servo_set_pulse(AnalogPin.P2, 1700)
    elif receivedString == "stop":
        pins.servo_set_pulse(AnalogPin.P1, 1500)
        pins.servo_set_pulse(AnalogPin.P2, 1500)
basic.forever(on_forever)
