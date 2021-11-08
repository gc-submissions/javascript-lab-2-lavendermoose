function randomDamage () {
    () => Math.floor(Math.random() * 10) + 1
    console.log(randomDamage)
}

function chooseOption(opt1, opt2) {
    return Math.floor(Math.random() * 2) + 1
}

function attackPlayer(health) {
    return (`${health} - ${randomDamage}`)
}

function logHealth (player, health) {
}
