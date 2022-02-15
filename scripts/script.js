// Об'явлення перемінних
let potatos = 15.678;
let tomatos = 123.965;
let bananas = 90.2345;

// виведіть максимальне, мінімальне число 
console.log(Math.max(potatos, tomatos, bananas));
console.log(Math.min(potatos, tomatos, bananas));

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let summ = potatos + tomatos + bananas;
console.log(summ);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
potatos = Math.floor(potatos);
tomatos = Math.floor(tomatos);
bananas = Math.floor(bananas);
console.log(potatos + tomatos + bananas);

// Виведіть суму товарів округлену до сотень.
console.log(Math.ceil(summ / 100) * 100);

// Виведіть булеве значення: чи є сума всіх товарів парним чи непарним числом?
// Не зрозумів це питання!!!
console.log(Boolean(summ));

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log(500 - summ);

// Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(Math.round((summ * 100)) / 100);

// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
let discount = Math.floor(Math.random() * 100);
console.log(discount);

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
console.log(Math.floor((summ - discount) * 100) / 100);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
console.log(Math.floor((summ / 2) - discount));

//Advanced. Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка
console.log("Максимальна ціна: " + Math.max(potatos, tomatos, bananas));
console.log("Мінімальна ціна: " + Math.min(potatos, tomatos, bananas));
console.log("Вартість всіх товарів: " + summ);
console.log("Вартість товарів без копійок: " + Math.floor(summ));
console.log("Сумма товарів округлена до сотні: " + Math.ceil(summ / 100) * 100);
console.log("Завдання з булевим значенням не зрозумів!");
console.log("Решта без округлення: " + (500 - summ));
console.log("Середнє значення цін, округлене до другого знаку після коми: " + Math.round((summ * 100)) / 100);
console.log("Знижка: " + discount);
console.log("Решта після знижки: " + Math.floor((summ - discount) * 100) / 100)
console.log("Чистий прибуток: " + Math.floor((summ / 2) - discount)); 