for (let i = 0; i < 10; i++) {
    let name = prompt('Ismingizni kiriting')
    while (!isNaN(name || name <= 0)) {
        name = prompt('Ismni harf bilan kiriting!')
    }
    let age = +prompt('Yoshingizni kiriting')
    while (isNaN(age) || age <= 0) {
        age  = +prompt('Yoshni raqam bilan kiriting!')
    }
    const person = {
       i:{ ism: name,
           yosh: age,
        }
    }
    let totalName = ''
    let totalAge  = 1
    for (const key in person) {
        totalName += person[key].ism
        totalAge  += person[key].yosh
    }
    console.log(`Foydalanuvchi ${i + 1}`);
    console.log(`Sizning ismingiz ${totalName}`);
    console.log(`Yoshingiz ${totalAge}da`);
    }
