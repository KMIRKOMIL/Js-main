let ism = prompt('Ismingizni kiriting.')
while (ism == 0 || !isNaN(ism)) {
    ism = prompt('Ism harf bilan yoziladi')
}
function yosh() {
    let xozir = +prompt('Xozirgi yilni kiriting.')
    while (xozir <= 0 || isNaN(xozir)) {
       xozir = +prompt('Yilni son bilan kiriting')
    }
    let yil = +prompt('Tug`ilgan yilingizni kiriting.')
    while (yil <= 0 || isNaN(yil)) {
        yil = +prompt('Yilingizni son bilan kiriting')
    }
    let javob = 1
    alert('Consolega kiring')
    return javob *= (xozir - yil)
}
console.log(ism + ', Yoshingiz ' + yosh() + 'da.')