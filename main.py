X = 0
Y = 0

def on_forever():
    global X, Y
    for カウンター in range(16):
        led.plot(X, Y)
        basic.pause(100)
        led.unplot(X, Y)
        if カウンター < 4:
            X += 1
        elif カウンター < 8:
            Y += 1
        elif カウンター < 12:
            X += -1
        else:
            Y += -1
basic.forever(on_forever)
