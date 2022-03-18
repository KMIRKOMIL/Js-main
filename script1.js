let qoy = +prompt('Qo`ylar sonini kiriting')
while (isNaN(qoy) || qoy <= 0) {
    qoy = +prompt('Son kiriting baraka topkur!!!')
}
let total = ''
for (let i = 0; i < qoy; i++) {
    if (i == 0) {
        total += `${i + 1}ta qo'y...`
    } else {
        total += `${i + 1}ta qo'ylar...`
    }
}
console.log(total);
