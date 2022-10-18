function Gagné () {
    soundExpression.giggle.play()
    while (true) {
        images.iconImage(IconNames.SmallHeart).showImage(0)
        images.iconImage(IconNames.Heart).showImage(0, 400)
    }
}
input.onButtonPressed(Button.A, function () {
    pas_effectues += 1
    led.unplot(romeo_x, romeo_y)
    romeo_y += 1
    if (romeo_y > 4) {
        romeo_y = 0
    }
    led.plot(romeo_x, romeo_y)
    if (romeo_x == juliet_x && romeo_y == juliet_y) {
        Gagné()
    } else {
        if (pas_effectues >= max_pas) {
            Perdu()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    pas_effectues += 1
    led.unplot(romeo_x, romeo_y)
    romeo_x = romeo_x + 1
    if (romeo_x > 4) {
        romeo_x = 0
    }
    led.plot(romeo_x, romeo_y)
    if (romeo_x == juliet_x && romeo_y == juliet_y) {
        Gagné()
    } else {
        if (pas_effectues >= max_pas) {
            Perdu()
        }
    }
})
function Perdu () {
    soundExpression.sad.play()
    images.iconImage(IconNames.Sad).showImage(0)
}
let romeo_y = 0
let romeo_x = 0
let juliet_y = 0
let juliet_x = 0
let max_pas = 0
let pas_effectues = 0
pas_effectues = 0
max_pas = 10
juliet_x = randint(0, 4)
juliet_y = randint(0, 4)
led.plot(juliet_x, juliet_y)
romeo_x = 0
romeo_y = 0
led.plot(romeo_x, romeo_y)
