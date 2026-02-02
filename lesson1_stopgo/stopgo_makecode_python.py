"""

2026, Robert Walsh
Copy and Paste this into the MakeCode Micro:Bit Python Editor on your Web Browser
Micro:Bit Extensions Required: bluetooth
Services Required: LOFI Robots Teachable Micro:Bit
Teachable Machine Sample Model URL:

"""


def on_uart_data_received():
    global receivedString
    receivedString = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))


bluetooth.on_uart_data_received(
    serial.delimiters(Delimiters.NEW_LINE), on_uart_data_received
)

receivedString = ""
bluetooth.start_uart_service()


def on_forever():
    if receivedString == "go":
        pins.servo_set_pulse(AnalogPin.P1, 500)
        pins.servo_set_pulse(AnalogPin.P2, 500)
    elif receivedString == "stop":
        pins.servo_set_pulse(AnalogPin.P1, 0)
        pins.servo_set_pulse(AnalogPin.P2, 0)


basic.forever(on_forever)
