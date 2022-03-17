console.log(cartObj());
const obj = cartObj()
let totalPrice = 0
let totalInfo  = ''
let allKey  = ''
let delivery   = 9000

for (const key in obj) {
    totalPrice += obj[key].price
    totalInfo  += obj[key].info + ', '
    allKey     += key + ' ' + obj[key].info + ', '
}
console.log(`Sizning buyurtmangiz: ${allKey}yetqazib berish xizmati bilan bo'lgan narx
${totalPrice + delivery} yetqazib berish narxi ${delivery}.`);