// let javob = ''
// let son = 7
// for (let i = 0; i < son; i++) {
//     for (let j = 0; j < son; j++) {
//         if (i == j || i == j + son - 1) {
//             javob += '[$]'
//         }else {
//             javob += '   '
//         }
//     }    
//     console.log(javob);
//     javob =  ''
// }

// // (j == 0 || i == 0 || j == 7 - 1 || i == 7 - 1)     (i == j + son - 1 || j == i + son - 1 )

let total = ""
let answer = +prompt(`Kvadrat sonini kiriting`)
while (isNaN(answer) || answer == 0) {
    answer = +prompt(`Son deb yozilganku-E!!!`)
}
if (answer % 2 == 0) {
    answer += 1
}
for (let i = 0; i < answer; i++) {
    for (let j = 0; j < answer; j++) {
        let end = answer - 1
        if (j == i || i == 0 || j == 0 || j == answer - 1 || i == answer - 1 || j == end - i) {
            total += "[X]"
        }
        else {
            total += "   "
        }
    }
    console.log(total);
    total = ""
}
