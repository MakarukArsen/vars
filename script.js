// Об'явлення перемінних
const potatos = 15.678;
const tomatos = 123.965;
const bananas = 90.2345;

// виведіть максимальне, мінімальне число 
const maxPrice = (Math.max(potatos, tomatos, bananas));
const minPrice = (Math.min(potatos, tomatos, bananas));

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const summ = potatos + tomatos + bananas;

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const fixedSumm = Math.floor(potatos) + Math.floor(tomatos) + Math.floor(bananas);

// Виведіть суму товарів округлену до сотень.
const roundedSumm = Math.round(summ / 100) * 100;

// Виведіть булеве значення: чи є сума всіх товарів парним чи непарним числом?
const checkPairSumm = Math.floor((summ / 100) * 100) % 2 === 0 ? "true" : "false";

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const rest = (500 - summ);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averageRoundedPrice = (summ / 3).toFixed(2);

// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const discount = Math.round(Math.random() * 100);

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const restWithDiscount = Math.round((summ - discount) * 100) / 100;

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const profit = Math.floor((summ / 2) - discount);

//Advanced. Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка
console.log("Максимальна ціна: " + maxPrice);
console.log("Мінімальна ціна: " + minPrice);
console.log("Вартість всіх товарів: " + summ);
console.log("Вартість товарів без копійок: " + fixedSumm);
console.log("Сумма товарів округлена до сотні: " + roundedSumm);
console.log("Сума всіх товарів парним числом: " + checkPairSumm);
console.log("Решта без округлення: " + rest);
console.log("Середнє значення цін, округлене до другого знаку після коми: " + averageRoundedPrice);
console.log("Знижка: " + discount);
console.log("Решта після знижки: " + restWithDiscount)
console.log("Чистий прибуток: " + profit); 