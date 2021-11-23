input.onButtonPressed(Button.A, function () {
    if (del == 0) {
        del = 1
    } else {
        del = 0
    }
})
let del = 0
del = 0
basic.forever(function () {
    if (del == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
