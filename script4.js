let nechta = +prompt('Nechta misol ishlashni istaysiz?')
for (let i = 0; i < nechta; i++) {
    function random(min,max) {
        return Math.round(Math.random()*(max-min) + min)
    }
    let sym = random(1,4)
    let son1 = random(20,100)
    let son2 = random(2,10)
    if (sym == 1) {
       sym = `${son1} + ${son2}`
       answer = son1 + son2
    }else if (sym == 2) {
        sym = `${son1} - ${son2}`
        answer = son1 - son2
    }else if (sym == 3) {
        sym = `${son1} * ${son2}`
        answer = son1 * son2
    }else {
        sym = `${son1} / ${son2}`
        answer = son1 / son2
    }
    javob = +prompt(sym + ' = ?');
    if (answer == javob) {
        console.log('Sizning javobingiz to`g`ri - ' + javob);
    } else {
        console.log('Sizning javobingiz noto`g`ri - ' + javob + '! To`g`ri javob ' + answer + '!');
    }
}