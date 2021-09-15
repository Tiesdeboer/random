input.onButtonPressed(Button.A, function () {
    Totaal = 0
    for (let waarde of lijst) {
        Totaal += waarde
    }
    basic.showNumber(Totaal)
})
input.onButtonPressed(Button.AB, function () {
    for (let waarde of lijst) {
        if (waarde < laagste) {
            laagste = waarde
        }
    }
    basic.showNumber(laagste)
})
input.onButtonPressed(Button.B, function () {
    for (let waarde of lijst) {
        if (waarde > hoogste_nummer) {
            hoogste_nummer = waarde
        }
    }
    basic.showNumber(hoogste_nummer)
})
let hoogste_nummer = 0
let laagste = 0
let Totaal = 0
let lijst: number[] = []
for (let index = 0; index < 10; index++) {
    lijst.unshift(randint(1, 100))
}
