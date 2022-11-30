input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
        basic.pause(2000)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        strip.clear()
        basic.pause(2000)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
