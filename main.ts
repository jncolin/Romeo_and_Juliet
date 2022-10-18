function Gagné () {
    soundExpression.giggle.play()
    while (true) {
        images.iconImage(IconNames.SmallHeart).showImage(0)
        images.iconImage(IconNames.Heart).showImage(0, 400)
    }
}
input.onButtonPressed(Button.A, function () {
    pas += 1
    led.unplot(chasseur_x, chasseur_y)
    chasseur_y += 1
    if (chasseur_y > 4) {
        chasseur_y = 0
    }
    led.plot(chasseur_x, chasseur_y)
    if (chasseur_x == cible_x && chasseur_y == cible_y) {
        Gagné()
    } else {
        if (pas >= max_pas) {
            Perdu()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    pas += 1
    led.unplot(chasseur_x, chasseur_y)
    chasseur_x = chasseur_x + 1
    if (chasseur_x > 4) {
        chasseur_x = 0
    }
    led.plot(chasseur_x, chasseur_y)
    if (chasseur_x == cible_x && chasseur_y == cible_y) {
        Gagné()
    } else {
        if (pas >= max_pas) {
            Perdu()
        }
    }
})
function Perdu () {
    soundExpression.sad.play()
    images.iconImage(IconNames.Sad).showImage(0)
}
let chasseur_y = 0
let chasseur_x = 0
let cible_y = 0
let cible_x = 0
let max_pas = 0
let pas = 0
pas = 0
max_pas = 10
cible_x = randint(0, 4)
cible_y = randint(0, 4)
led.plot(cible_x, cible_y)
chasseur_x = 0
chasseur_y = 0
led.plot(chasseur_x, chasseur_y)
