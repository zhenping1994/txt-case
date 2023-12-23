ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function () {
    ESP8266_IoT.connectWifi("your_ssid", "your_pwd")
})
