# 2026, Robert Walsh
# Copy and Paste this into the MakeCode Micro:Bit Python Editor on your Web Browser
# Micro:Bit Extensions Required: bluetooth
# Services Required: LOFI Robots Telepresence Application

def on_uart_data_received():
    global receivedString
    receivedString = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
    if receivedString == "UP":
        basic.show_arrow(ArrowNames.NORTH)
        pins.servo_set_pulse(AnalogPin.P1, 1700)
        pins.servo_set_pulse(AnalogPin.P2, 1700)
    if receivedString == "DOWN":
        basic.show_arrow(ArrowNames.SOUTH)
        pins.servo_set_pulse(AnalogPin.P1, 1300)
        pins.servo_set_pulse(AnalogPin.P2, 1300)
    if receivedString == "LEFT":
        basic.show_arrow(ArrowNames.WEST)
        pins.servo_set_pulse(AnalogPin.P1, 1700)
        pins.servo_set_pulse(AnalogPin.P2, 1500)
    if receivedString == "RIGHT":
        basic.show_arrow(ArrowNames.EAST)
        pins.servo_set_pulse(AnalogPin.P1, 1500)
        pins.servo_set_pulse(AnalogPin.P2, 1700)
    if receivedString == "A":
        pins.servo_set_pulse(AnalogPin.P1, 1500)
        pins.servo_set_pulse(AnalogPin.P2, 1500)
    if receivedString.substr(0, 1) == "x":
        led.plot_bar_graph(parse_float(receivedString.substr(1, 3)), 180)
    if receivedString.substr(0, 1) == "c":
        led.plot_bar_graph(parse_float(receivedString.substr(1, 3)), 180)
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

receivedString = ""
bluetooth.start_uart_service()