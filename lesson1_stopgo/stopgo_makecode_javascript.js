/*

2026, Robert Walsh
Copy and Paste this into the MakeCode Micro:Bit JavaScript Editor on your Web Browser
Micro:Bit Extensions Required: bluetooth
Services Required: LOFI Robots Teachable Micro:Bit
Teachable Machine Sample Model URL:

*/

bluetooth.onUartDataReceived(
  serial.delimiters(Delimiters.NewLine),
  function on_uart_data_received() {
    receivedString = bluetooth.uartReadUntil(
      serial.delimiters(Delimiters.NewLine),
    );
  },
);

let receivedString = "";
bluetooth.startUartService();
basic.forever(function on_forever() {
  if (receivedString == "go") {
    pins.servoSetPulse(AnalogPin.P1, 500);
    pins.servoSetPulse(AnalogPin.P2, 500);
  } else if (receivedString == "stop") {
    pins.servoSetPulse(AnalogPin.P1, 0);
    pins.servoSetPulse(AnalogPin.P2, 0);
  }
});
