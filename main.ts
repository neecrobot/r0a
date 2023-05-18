let X = 0
let Y = 0
basic.forever(function () {
    X = 0
    Y = 0
    for (let カウンター = 0; カウンター <= 15; カウンター++) {
        led.unplot(X, Y)
        if (カウンター < 4) {
            X += 1
        } else if (カウンター < 8) {
            Y += 1
        } else if (カウンター < 12) {
            X += -1
        } else {
            Y += -1
        }
        led.plot(X, Y)
        basic.pause(100)
    }
})
