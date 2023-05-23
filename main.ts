input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
    }
})
