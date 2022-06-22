// Структура кода

// alert('Hello'); //Вызов окна с Hello.
// alert('world') // Вызов окна c world.

// Переменные и типы данных

// let login;
// let name = 'Karina';
// login = name;
// console.log(login);

// let dateCreateFile;
// let nameFile;
// let amountBug;

// let r = 15; // радиус
// let Pi = 3.1415; // число Пи
//
// // Вычислите значение площади окружности на основании значений выше.
// // Площадь круга равна произведению квадрата радиуса на число Пи (3.1415)
// // Выведите результат
//
// let circleArea = Math.pow(r, 2) * Pi;
//
// console.log(circleArea);

// let productPrice1 = 101.5; // цена 1го продукта
// let productPrice2 = 50.25; // цена 2го продукта
// let productPrice3 = 10.11; // цена 3го продукта
//
// let productQuantity1 = 5;  // количество единиц 1го продукта на складе
// let productQuantity2 = 9;  // количество единиц 2го продукта на складе
// let productQuantity3 = 15; // количество единиц 3го продукта на складе
//
// // Выведите на экран:
// // 1) Среднюю цену на продукт
// // 2) Общую стоимость всех продуктов, которые есть на складе
//
// let averagePrice = (productPrice1 + productPrice2 + productPrice3) / 3 + '$';
// console.log(averagePrice);
// let allPrice = (productQuantity1 + productQuantity2 + productQuantity3) + '$';
// console.log(allPrice);

// console.log("Вычисление объема цилиндра.");
// //  V=π * r в квадрате * h
// let V;
// const Pi = 3.1415926535;
// let r = 10;
// let h = 20;
//
// V = Pi * r * r * h;
// console.log(V);

// Строки и преобразование типов

// let name = "Иван";
// let age = 25;
// let company = "ITVDN";
// let position = "Frontend Developer";
//
// // инициализируйте переменную message
// // значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
// // строковое значение должно быть создано на основе значений переменных name, age, company, position
// // Значение должно быть составлено по шаблону:
// // Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN.
//
// let message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работою на должности ${position} в компании ${company}. `;
// console.log(message);

// // Задание:
// //     Внесите изменения в сценарий. Сделайте, чтобы значение для радиуса и высоты вводил пользователь.
// //     При выводе значений используйте форматированный вывод, например, "объем цилиндра с высотой X и радиусом Y = Z"
//
// console.log("Вычисление объема цилиндра.");
// //  V=π * r в квадрате * h
// let writeRadius = +prompt('Введите радиус', '10');
// let writeHeight = +prompt('Введите высоту', '20');
// const Pi = 3.1415926535; // правильно использовать константу для подобных значений
//
// let V = `Обьем цилиндра с высотой ${writeHeight}см. и радиусом ${writeRadius}см. = ${Pi * Math.pow(writeRadius, 2) * writeHeight}см.`;
// alert(V);

// Задание:
// 1) запросите у пользователя сколько он хочет купить единиц товара
// 2) выведите на экран какую сумму должен внести пользователь с учетом количества покупаемых единиц
// 3) выведите на экран сколько единиц товара останется на складе после покупки

// let productPrice = 101.5; // цена товара
// let productQuantity = 50;  // количество единиц товара на складе
//
// let productAmount = prompt('Сколько единиц товара Вы хотите приобрести?', '1');
// alert(`Общая стоимость товаров: ${productPrice * productAmount}$`);
// alert(`На складе осталось ${productQuantity - productAmount} единиц товара.`);

// // Задание:
// //     Представьте, что вы разрабатываете сценарий, который будет использоваться для каталога товаров в интернет-магазине.
// //     Задача сценария, рассчитать какая должна быть ширина блока с описанием товара, для того чтобы в одну строку поместилось
// // определенное количество товаров. Полученное значение ширины одного блока отобразите в консоли.
//
// let screenWidth = 1980; // ширина экрана
// let margins = 10; // отступы межу блоками с описанием товара
// let desieredBlockCount = 5; // количество блоков с описанием, которые должны отобразиться в одну строку
//
// let width = (screenWidth - (margins * (desieredBlockCount - 1))) / desieredBlockCount; // рассчитайте ширину блока и запишите в эту переменную
//     console.log(`Ширина одного блока ${width}px`);

// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);
//
// // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
// // используйте форматированный вывод
//
// let productTotalCost1 = productPrice1 * productQuantity1;
// let productTotalCost2 = productPrice2 * productQuantity2;
// let productTotalCost3 = productPrice3 * productQuantity3;
//
// alert(`Общая стоимость ${product1}: ${productTotalCost1}$.`);
// alert(`Общая стоимость ${product2}: ${productTotalCost2}$.`);
// alert(`Общая стоимость ${product3}: ${productTotalCost3}$.`);
// alert(`Общая стоимость товаров: ${productTotalCost1 + productTotalCost2 + productTotalCost3}$.`);

// let counter = 1;
//
// function foo() {
//     console.log(`${counter++} circle`);
//     return function () {
//         console.log(`${counter++} circle`)
//         foo()();
//     };
// }
//
// foo()();

// let user = {
//     name: "Karina",
//     age: 20,
//
//     toString() {
//         return `${this.name}:${this.age}`
//     }
// }
//
// alert(btoa(user.toString()));
// alert(atob("S2FyaW5hOjIw"));

//Операторы

// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, '0');
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, '0');
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, '0');
//
// let totalPrice = 0;
//
// totalPrice = totalPrice + productPrice1 * productQuantity1;
// totalPrice = totalPrice + productPrice2 * productQuantity2;
// totalPrice = totalPrice + productPrice3 * productQuantity3;
//
// alert(`Общая сумма ${totalPrice}`);

// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);
//
// let totalPrice = 0;
//
// totalPrice += productPrice1 * productQuantity1;
// totalPrice += productPrice2 * productQuantity2;
// totalPrice += productPrice3 * productQuantity3;
//
// alert(`Общая сумма ${totalPrice}`);

// let ordersCount = 0;
// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);
//
// let totalPrice = 0;
//
// totalPrice = totalPrice + productPrice1 * productQuantity1;
// totalPrice = totalPrice + productPrice2 * productQuantity2;
// totalPrice = totalPrice + productPrice3 * productQuantity3;
// ordersCount = ordersCount++;
//
// alert(`Общая сумма ${totalPrice}`);

// let a = 10;
// let b = 20;
//
// // укажите операторы так, чтобы на консоль вывелись сообщения, такие же, как и в комментариях на строках 18, 19, 20
// console.log(a < b);  // true
// console.log(a > b);  // false
// console.log(a !== b); // true

// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, '0');
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, '0');
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, '0');
//
// // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
// // используйте форматированный вывод
// let totalPriceProduct1 = productPrice1 * productQuantity1;
// let totalPriceProduct2 = productPrice2 * productQuantity2;
// let totalPriceProduct3 = productPrice3 * productQuantity3;
//
// let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
// alert(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
// alert(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
// alert(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
// alert(`Всего: ${total}`);

//If statement

// let userQuestionNum = +prompt("Введіть число:", "Сюди будь ласка))");
//
// let answerForUser = null;
//
// if (userQuestionNum < 0) {
//     answerForUser = -1;
// } else if (userQuestionNum) {
//     answerForUser = 1;
// } else {
//     answerForUser = 0;
// }
//
// alert(answerForUser);

// alert("Вычисление объема цилиндра.");
// //  V=π * r в квадрате * h
// let V;
// const Pi = 3.1415926535;
// let r = +prompt("Введите радиус цилиндра", '0');
// let h = +prompt("Введите высоту цилиндра", '0');
//
// if (r === 0 || h === 0 || isNaN(r) || isNaN(h)) {
// alert('Введено не коректні данні!');
// } else {
//     V = Pi * r * r * h;
//     alert(`Объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);
// }

// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);
//
// // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
// // используйте форматированный вывод
// let totalPriceProduct1 = productPrice1 * productQuantity1;
// let totalPriceProduct2 = productPrice2 * productQuantity2;
// let totalPriceProduct3 = productPrice3 * productQuantity3;
//
// let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
// let delivery = confirm('Чи бажаєте замовити доставку?');
//
// if (delivery) {
//     console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
//     console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
//     console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
//     console.log(`Всего с доставкой ${total + 40}`);
// } else {
//     console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
//     console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
//     console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
//     console.log("Всего " + total);
// }

// let productPrice = 101.5; // цена товара
// let productQuantity = 50;  // количество единиц товара на складе
//
// let count = prompt("Сколько единиц товара Вы хотите приобрести?", 1);
// let totalSum = count * productPrice;
// let leftInStorage = productQuantity - count;
//
// if (leftInStorage > 0) {
//     alert(`Общая стоимость: ${totalSum}`);
//     alert("Количество товара останется на складе после покупки: " + leftInStorage);
// } else {
//    alert(`Нажаль на складі залишилося ${productQuantity} одиниць товару, ви можете зменшити кількість товару, та повторити спробу. Дякуємо за розуміння!)`)
// }

// let login = "admin";
// let password = "12345";
//
// let inputLogin = prompt("Введите логин");
// let inputPassword = prompt("Введите пароль");
//
// if (inputLogin === login && inputPassword === password) {
//         alert("Вы авторизованы!");
// } else
// {
//     alert("Логин или пароль введены неправильно");
// }

//Switch

// let value = +prompt("Введите число 1 или 2");
//
// switch (value) {
//     case 1:
//         alert("Вы ввели число 1");
//         break;
//     case 2:
//         alert("Вы ввели число 2");
//         break;
//     default:
//         alert("Вы ввели неправильное значение");
// }

// let season = +prompt('Введіть число від 1-го до 4-х', '0')
//
// let result = null;
//
// switch (season) {
//     case 1:
//         alert(`${result = 'Зима'}`);
//         break;
//     case 2:
//         alert(`${result = 'Весна'}`);
//         break;
//     case 3:
//         alert(`${result = 'Літо'}`);
//         break;
//     case 4:
//         alert(`${result = 'Осінь'}`);
//         break;
//     default:
//         alert(`${result = 'Некоректне значення. Спробуйте ще раз.'}`);
// }

// let country = prompt("введите название страны");
//
// if (country === 'USA' || country === 'Great Britain') {
//     alert("Английский язык");
// } else if (country === 'Germany') {
//     alert("Немецкий язык");
// } else if (country === 'France') {
//     alert("Французский язык");
// } else {
//     alert("Указанной страны нет в списке");
// }

// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";
//
// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;
//
// let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);
//
// let totalPriceProduct1 = productPrice1 * productQuantity1;
// let totalPriceProduct2 = productPrice2 * productQuantity2;
// let totalPriceProduct3 = productPrice3 * productQuantity3;
//
// let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
// alert(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
// alert(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
// alert(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
//
// let shipping = confirm("Заказываете доставку курьером?");
//
// let discount = total;
//
// if (total > 500 && total < 1000) {
//     discount -= total * 0.05;
// } else if (total > 1000 && total < 1500) {
//     discount -= total * 0.1;
// } else if (total > 1500) {
//     discount -= total * 0.15;
// } else {
//     discount = total;
// }
//
// let totalWithShipping = 0;
//
// if (shipping && total <= 1500) {
//     totalWithShipping += 40;
// } else {
//     totalWithShipping = 0
// }
//
// alert(`Сумма заказа - ${total}\r\nСкидка ${total - discount}\r\nДоставка - ${totalWithShipping}\r\nВего к оплате - ${discount + totalWithShipping}`);

// let age = +prompt("Введите ваш возраст");
// let technology = prompt("Ведите 1 или 2. 1 - JavaScript. 2 - C#");
// let expirience = prompt("Введите опыт работы в годах.");
//
// let adult, specialization, position;
//
// adult = age >= 18 ? "совершеннолетний" : "несовершеннолетний";
// specialization = technology === 1 ? "Frontend" : "Backend";
//
// if (expirience === 0) {
//     position = "Без опыта работы";
// }
// else if (expirience > 0 && expirience < 1.5) {
//     position = "Junior";
// }
// else if (expirience > 1.5 && expirience < 3) {
//     position = "Middle";
// }
// else if (expirience > 3) {
//     position = "Senior";
// }
// else {
//     position = "error";
// }
//
// let result = `Возраст: ${adult}\r\nСпециализация: ${specialization}\r\nПозиция: ${position}`;
//
// alert(result);

// console.log('0' == false); //true
// console.log('0' == 0); // true
// console.log('' == false); // true
// console.log([] == false); // true
// console.log({} == false); // false
// console.log('' == 0); // true
// console.log('' == []); // true
// console.log('' == {}); // false
// console.log(0 == []); // true
// console.log(0 == {}); // false
// console.log(0 == null); // false
// console.log('' == '0'); // false
// console.log(1 == 0); // false

// let cities = ["London", "Paris", "Italy", "Berlin", "Rome"];
//
// cities.splice(2, 1);
//
// console.log(cities)

//Циклы

// for(let i = 1; i < 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// let askNumMoreTen = null;
//
// do {
//     askNumMoreTen = +prompt('Введите значение больше 10', '11')
// }
// while (askNumMoreTen < 10);

// // for (let i = 0; i < 5; i++)
// // {
// //     console.log(`значение ${i}`);
// // }
//
// let i = 0;
// while (i < 5) {
//     console.log(`значение ${i}`);
//     i++;
// }

// let askUserNum = +prompt('Введите число', '1');
// let sumAllNumFromZ = 0;
//
// for (let i = 0; i <= askUserNum; i++) {
//     sumAllNumFromZ += i;
// }
//
// console.log(sumAllNumFromZ);

// let randomValue = Math.floor(Math.random() * 101);
// alert('Я загадал случайное значение от 0 до 100')
// let madeNum = null;
// let countTry = 1;
//
// do {
//     madeNum = +prompt('Попробуйте угадать. Введите значение', '1');
//
//     if (madeNum === null) {
//     madeNum = 0;
//     }
//
//     if (madeNum < randomValue) {
//         alert(`я загадал значение больше чем ${madeNum}`);
//         countTry++
//     } else if (madeNum > randomValue) {
//         alert(`я загадал значение меньше чем ${madeNum}`);
//         countTry++
//     }
// } while (madeNum !== randomValue);
//
// alert(`Вы угадали с ${countTry} попытки`);

//Массивы

// Задание:
// Напишите сценарий, который найдет минимальное, максимальное значения массива, а также выведет сумму всех элементов массива.

// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let maxValue = Math.max(...values);
// let minValue = Math.min(...values);
//
// let sumByArr = values.reduce((sum, current) => sum + current, 0)
//
// console.log(maxValue);
// console.log(minValue);
// console.log(sumByArr);

// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let max = Number.MIN_VALUE;
//
// for (let index = 0; index < values.length; index++)
// {
//     const element = values[index];
//     if(element > max)
//     {
//         max = element;
//     }
// }
//
// console.log("Максимальное значение массива - " + max); // 125
//
// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let max = Number.MIN_VALUE;
//
// for (let item of values) {
//     const element = values[item];
//     if (element > max) {
//         max = element;
//     }
// }
//
// console.log("Максимальное значение массива - " + max); // 125

// Задание:
// Напишите сценарий, который найдет в массиве все отрицательные значения и заменить их на значения 0.
// После этого выведет на экран все элементы массива.

// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
//
// for (let i = 0; i < values.length; i++) {
//     if (values[i] < 0) {
//       values[i] = 0
//     }
// }
//
// console.log(values);

// Задание:
//     Дано массив. Создайте на основе значений этого массива два новых массива. В один массив поместите все четные значения, а во второй все нечетные.
//     Выведите на экран значения, которые вошли в первый массив и во второй массив.

// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
//
// let countable = [];
// let uncountable = [];
//
// for (let i = 0; i < values.length; i++) {
//     if (values[i] % 2 === 0) {
//       countable.push(values[i]);
//     } else {
//         uncountable.push(values[i]);
//     }
// }
//
// console.log(countable);
// console.log(uncountable);

// Задание:
// Найдите первый положительный элемент массива и выведите его на экран.

// let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
//
// for (let index of values) {
//     if (index > 0) {
//         console.log(index);
//         break;
//     }
// }

// Задание:
//     Дано массив. Поменяйте элемент с максимальным значением местами с элементом с минимальным значением.

// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
//
// let maxValue = Math.max(...values);
// let minValue = Math.min(...values);
//
// let maxIndex = values.indexOf(maxValue);
// let minIndex = values.indexOf(minValue);
//
// values[maxIndex] = minValue;
// values[minIndex] = maxValue;
//
// console.log(values);

// Задание:
//     Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.

// let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];
//
// for (let i = 0; i < values.length; i++) {
//
//     for (let k = i + 1; k < values.length; k++) {
//
//         if (values[i] === values[k]) {
//             console.log(`Значение ${values[i]} повторяется!`);
//             break;
//         }
//     }
// }

//Методы массивов

// Задание:
//     Попросите у пользователя ввести название города. Удалите этот город из элементов массива.
//     Если города нет в массиве, сообщите об этом пользователю.
//     Выведите массив на экран после удаления элементов.

// let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];
//
// let askCity = prompt('Введите город', '');
//
// for (let city of cities) {
//
//     if (!cities.includes(askCity)) {
//         console.log('Такого города нет');
//         break;
//     }
//
//     if (city === askCity) {
//         cities.splice(cities.indexOf(city), 1);
//         console.log(cities);
//         break;
//     }
// }

// Задание:
// Напишите сценарий, который будет запрашивать у пользователя значения, до тех пор, пока тот не введет значение stop
// Все введенные значения, если они являются числом, должны быть добавлены в массив.
// После того, как пользователь ввел значение стоп, посчитайте сумму всех значений, которые находятся в массиве.

// let arrOfNumber = [];
//
// while (true) {
//   let askUserOfNumber = prompt('Введите число, или "Стоп"', '0');
//
//     if (askUserOfNumber === "Стоп") break;
//
//     let num = Number(askUserOfNumber);
//     if (!isNaN(num)) {
//         arrOfNumber.push(num);
//     }
// }
//
// alert("Сумма всех введенных элементов " + arrOfNumber.reduce((sum, current) => sum + current, 0));

// Задание:
// Перепишите сценарий и воспользуйтесь одним из методов, изученных в уроке. Поменяйте код так, чтобы сохранить его поведение.

// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// let oddValues = [];
// let evenValues = [];
//
// for (let value of values) {
//     if (value % 2 === 0) {
//         evenValues.push(value);
//     } else {
//         oddValues.push(value);
//     }
// }
//
// console.log("Нечетные значения");
// for (let oddVal of oddValues) {
//     console.log(oddVal);
// }
//
// console.log("Четные значения");
// for (let evenVal of evenValues) {
//     console.log(evenVal);
// }

// Задание:
//     Найдите все значения в массиве меньше 0 и удалите их.

// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
//
// for ( let num of values ) {
//    if ( num < 0 ) {
//        values.splice(values.indexOf(num), 1);
//    }
// }
//
// console.log( values );

// Задание:
// Перепишите код так, чтобы значения для массива count задавались пользователем.
// Посчитайте стоимость покупок. Выведите сколько было потрачено на каждый продукт по отдельности и сколько потрачено в общем.

// // названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";
//
// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя
//
// let count = [];
//
// for (let item of names) {
//
//     let byProducts = +prompt(`Укажите количество для ${item}`);
//     count.push(byProducts);
// }
//
// console.log(count)
// let totalPrice = [];
//
// for (let i = 0; i < names.length; i++){
//     totalPrice.push(prices[i]* count[i]);
//     console.log(`Куплено ${names[i]} на сумму ${prices[i] * count[i]}`);
// }
//
// console.log('Товаров куплено на ' + totalPrice.reduce((sum, current) => sum + current, 0 )+ '$');

//Функции 1

// Задание:
// Создайте функцию min(a, b), которая возвращает меньшее из чисел а и b

// function min(a, b) {
//     if (a < b) {
//         console.log(`${a} - меньше чем ${b}`);
//     } else {
//         console.log(`${b} - меньше чем ${a}`);
//     }
// }
//
// min(5, 10);
// min(30, 10);

// Задание:
// Создайте функцию avg(a, b, c), которая возвращает среднее арифметическое для чисел a, b, c
// Если параметр отсутствует - не используйте значение для расчета среднего арифметического значения.

// function avg(a, b, c) {
//
//     let arrAvg = [a, b, c];
//     if (arrAvg.includes(undefined)) {
//         arrAvg.splice(arrAvg.indexOf(undefined), 1);
//     }
//     return arrAvg.reduce((sum, current) => sum + current, 0) / arrAvg.length;
// }
//
// console.log(avg(2, 4));

// Задание:
//     Выполните рефакторинг кода. Вынесите блок кода инициализирующий массив count и блок кода рассчитывающий и выводящий сумму покупок в две отдельные функции.
//     Поведение сценария не должно измениться.

// // названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";
//
// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя
//
// let count = [];
//
// countProduct();
// totalSumByProducts();
//
// function countProduct() {
//
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         let countToBuy = +prompt("Укажите количество для " + productName);
//
//         if (isNaN(countToBuy))
//             countToBuy = 0;
//
//         count.push(countToBuy);
//     }
// }
//
// function totalSumByProducts() {
//     let totalSum = 0;
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         const productPrice = prices[i];
//         const boughtCount = count[i];
//
//         let price = productPrice * boughtCount;
//         totalSum += price;
//         console.log(`Куплено ${productName} на сумму ${price}`);
//     }
//     console.log("Всего продуктов куплено на " + totalSum);
// }

// Задание:
// Создайте функцию random(min, max), которая возвращает случайное значение в диапазоне от min до max.
// Сделайте, чтобы сценарий заработал. Код генерации случайного значения найдите с помощью поисковой системы или в заданиях из прошлых уроков.

// let throwCount = +prompt("Сколько раз вы хотите бросить шестигранный кубик");
//
// for (let i = 0; i < throwCount; i++) {
//     const result = random(1, 6);
//     console.log(result);
// }
//
// function random(min, max) {
//     return min + Math.random() * (max - min);
//     // return min + Math.floor((max - min + 1) * Math.random());
// }

// Задание:
// Создайте функцию, которая принимает массив значений и возвращает массив с дублирующимися значениями или null если повторяющихся значений в массиве нет.

// let arr = [1, 3, 5, 7, 10, 38, 4, 3, 7, 38, 6, 9, 0, 1, 1, 1, 3, 3];
//
// function createArrFromDuplicatedElements(arr) {
//
//     let arrWithoutDuplicate = [];
//     let arrFromDuplicate = []
//
//     arr.forEach(element => {
//         if (!arrWithoutDuplicate.includes(element)) {
//             arrWithoutDuplicate.push(element);
//         } else if (!arrFromDuplicate.includes(element)) {
//             arrFromDuplicate.push(element);
//         }
//     })
//
//     console.log(arrFromDuplicate);
//     return arrWithoutDuplicate;
// }
//
// console.log(createArrFromDuplicatedElements(arr));

// Задание:
// Исправьте ошибку в коде, связанную с областями видимостей.

// // названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";
//
// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя
//
// let count = [];
//
// initCountArray();
// calculateSum();
//
// function initCountArray() {
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         let countToBuy = +prompt("Укажите количество для " + productName);
//
//         if (isNaN(countToBuy))
//             countToBuy = 0;
//
//         count.push(countToBuy);
//     }
// }
//
// function calculateSum() {
//     let totalSum = 0;
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         const productPrice = prices[i];
//         const boughtCount = count[i];
//
//         let price = productPrice * boughtCount;
//         totalSum += price;
//         console.log(`Куплено ${productName} на сумму ${price}`);
//     }
//     console.log("Всего продуктов куплено на " + totalSum);
// }

// Задание:
// Исправьте ошибку в сценарии, не изменяя способа определения функций (функции должны создаваться как именованные функции-выражения).

// let initCountArray = function initCountArray() {
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         let counttoBuy = +prompt("Укажите количество для " + productName);
//
//         if (isNaN(counttoBuy))
//             counttoBuy = 0;
//
//         count.push(counttoBuy);
//     }
// }
//
// let calculateSum = function calculateSum() {
//     let totalSum = 0;
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         const productPrice = prices[i];
//         const boughtCount = count[i];
//
//         let price = productPrice * boughtCount;
//         totalSum += price;
//         console.log(`Куплено ${productName} на сумму ${price}`);
//     }
//     console.log("Всего продуктов куплено на " + totalSum);
// }
//
// // названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";
//
// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя
//
// let count = [];
//
// initCountArray();
// calculateSum();
// Задание:
// Замените в коде все функции-выражения на стрелочные функции.

// let data = [1, 2, 3, 4, 5];
//
// let result = data.map((value) => value * value);
//
// result.forEach((e) => console.log(e));

// Задание:
// Перепишите код с использованием функции filter и forEach из ES5.

// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// // let oddValues = [];
// // let evenValues = [];
// // let oddValuesPosition = 0;
// // let evenValuesPosition = 0;
//
// let evenValues = values.filter( item => item % 2 === 0 );
// let oddValues = values.filter( item => item % 2 !== 0 );
// // for (let value of values) {
// //     if (value % 2 === 0) {
// //         evenValues[evenValuesPosition] = value;
// //         evenValuesPosition++;
// //     } else {
// //         oddValues[oddValuesPosition] = value;
// //         oddValuesPosition++;
// //     }
// // }
//
// console.log("Нечетные значения");
// oddValues.forEach(item => console.log(item))
// // for (let oddVal of oddValues) {
// //     console.log(oddVal);
// // }
//
// console.log("Четные значения");
// evenValues.forEach(item => console.log(item))
// // for (let evenVal of evenValues) {
// //     console.log(evenVal);
// // }

// Задание:
// Запросите у пользователя число. Выведите все числа в обратном порядке от введенного пользователем значения до 1. Используйте для решения рекурсию.

// let askUserOfNumber = +prompt('Введите число', '')
//
// function allNumFromUserNumber(num) {
//     if (num === 1) {
//         return console.log(1);
//     }
//     console.log(num);
//     return allNumFromUserNumber(num - 1)
// }
//
// allNumFromUserNumber(askUserOfNumber);

//Обьекты 1

// Задание:
//     Исправьте ошибки в коде.

//     let user = {
//     name: "admin",
//     email: "admin@example.com"
// };
//
// console.log(user.name);
// console.log(user.email);
//
// user.email = "admin@itvdn.com";
//
// console.log(user.email);

// Задание:
// Создайте два объекта, используя конструктор и литерал. Оба объекта должны содержать свойства firstName и lastName
// с произвольными значениями. Создайте функцию print, которая будет принимать в качестве параметра объект и выводить свойства
// lastName и firstName полученного объекта на экран.

// let user1 = {
//     firstName: 'Марина',
//     lastName: 'Кукукина',
// }
//
// let user2 = {
//     firstName: 'Света',
//     lastName: 'Топкина',
// }
//
// function print (obj) {
// return `${obj.firstName} ${obj['lastName']}`
// }
//
// console.log(print(user1));
// console.log(print(user2));

// Задание:
// Поменяйте сценарий. Выведите информацию только о тех пользователях, кто работает в компании Keebler LLC.

// массив создан с помощью https://jsonplaceholder.typicode.com/users
// все свойства в объектах, которые находятся в массиве, взяты в "". Такой формат данных

// let users = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];
//
// for (const user of users) {
//     if(user.company.name === 'Keebler LLC') {
//         console.log(user.name + " from " + user.address.city);
//     }
// }

// Задание:
//     Выведите на экран свойства first и last из вложенного объекта name. Поменяйте значение свойства balance на '$2000'. Удалите свойство email.
//     Выведите на экран все содержимое объекта с помощью кода console.log(user).

// let user = {
//     balance: '$1,250.89',
//     age: 24,
//     name: {
//         first: 'Golden',
//         last: 'Clements'
//     },
//     company: 'EWAVES',
//     email: 'golden.clements@ewaves.io',
//     friends: [
//         {
//             id: 0,
//             name: 'Buchanan Austin'
//         },
//         {
//             id: 1,
//             name: 'Richmond Garrison'
//         },
//         {
//             id: 2,
//             name: 'Burns Cook'
//         },
//         {
//             id: 3,
//             name: 'Sally Mcpherson'
//         }
//     ],
//     favoriteFruit: 'strawberry'
// }
//
// function changeUser(obj) {
//     console.log(`${obj.name.first} ${obj.name.last}`)
//     obj.balance = '$2000';
//     delete obj.email
//
//     return obj;
// }
//
// console.log(changeUser(user));

// Задание:
// Все объекты в массиве users имеют одинаковую структуру.
// Выведите на экран:
// 1) Адреса электронной почты всех пользователей (email)
// 2) Имя и фамилию пользователей с наибольшим количеством друзей (свойства name и friends)
// 3) Компанию пользователя с наибольшим балансом и компанию пользователя с наименьшим балансом (свойства company и balance)

// массив сгенерирован с помощью https://next.json-generator.com/
// let users = [
//     {
//         balance: '1250.89',
//         age: 24,
//         name: {
//             first: 'Golden',
//             last: 'Clements'
//         },
//         company: 'EWAVES',
//         email: 'golden.clements@ewaves.io',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Buchanan Austin'
//             },
//             {
//                 id: 1,
//                 name: 'Richmond Garrison'
//             },
//             {
//                 id: 2,
//                 name: 'Burns Cook'
//             },
//             {
//                 id: 3,
//                 name: 'Sally Mcpherson'
//             },
//             {
//                 id: 4,
//                 name: 'Nina Hood'
//             },
//             {
//                 id: 5,
//                 name: 'Rhonda Anderson'
//             },
//             {
//                 id: 6,
//                 name: 'Mathis Bowen'
//             },
//             {
//                 id: 7,
//                 name: 'Janie Carlson'
//             },
//             {
//                 id: 8,
//                 name: 'Brooke Reilly'
//             },
//             {
//                 id: 9,
//                 name: 'Peters Oliver'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '3637.94',
//         age: 23,
//         name: {
//             first: 'Francis',
//             last: 'Hebert'
//         },
//         company: 'XPLOR',
//         email: 'francis.hebert@xplor.biz',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Clements Glass'
//             },
//             {
//                 id: 1,
//                 name: 'Gutierrez Padilla'
//             },
//             {
//                 id: 2,
//                 name: 'Noelle Wilkinson'
//             },
//             {
//                 id: 3,
//                 name: 'Kim Sampson'
//             },
//             {
//                 id: 4,
//                 name: 'Luz Palmer'
//             }
//         ],
//         favoriteFruit: 'apple'
//     },
//     {
//         balance: '1106.44',
//         age: 31,
//         name: {
//             first: 'Hale',
//             last: 'Cross'
//         },
//         company: 'EARTHPURE',
//         email: 'hale.cross@earthpure.us',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Terri Clark'
//             },
//             {
//                 id: 1,
//                 name: 'Marie Joyce'
//             },
//             {
//                 id: 2,
//                 name: 'Howell Moses'
//             },
//             {
//                 id: 3,
//                 name: 'Juarez Marshall'
//             },
//             {
//                 id: 4,
//                 name: 'Corinne Grant'
//             },
//             {
//                 id: 5,
//                 name: 'Chandra Ferrell'
//             },
//             {
//                 id: 6,
//                 name: 'Emily Kidd'
//             },
//             {
//                 id: 7,
//                 name: 'Claudine Pollard'
//             },
//             {
//                 id: 8,
//                 name: 'Walter Cooper'
//             },
//             {
//                 id: 9,
//                 name: 'Isabella Hays'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '2502.43',
//         age: 25,
//         name: {
//             first: 'Delores',
//             last: 'Sykes'
//         },
//         company: 'ASSITIA',
//         email: 'delores.sykes@assitia.com',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Amy Fox'
//             },
//             {
//                 id: 1,
//                 name: 'Laurel Gaines'
//             },
//             {
//                 id: 2,
//                 name: 'Mcguire French'
//             },
//             {
//                 id: 3,
//                 name: 'Savage Rocha'
//             },
//             {
//                 id: 4,
//                 name: 'Durham Fowler'
//             },
//             {
//                 id: 5,
//                 name: 'Jacobson Clay'
//             },
//             {
//                 id: 6,
//                 name: 'Hamilton Pierce'
//             },
//             {
//                 id: 7,
//                 name: 'Johns Jefferson'
//             },
//             {
//                 id: 8,
//                 name: 'Avery Campbell'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '3651.54',
//         age: 21,
//         name: {
//             first: 'Ryan',
//             last: 'Bolton'
//         },
//         company: 'MOLTONIC',
//         email: 'ryan.bolton@moltonic.biz',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Weaver Buchanan'
//             },
//             {
//                 id: 1,
//                 name: 'Francesca Rice'
//             },
//             {
//                 id: 2,
//                 name: 'Sheppard Calhoun'
//             },
//             {
//                 id: 3,
//                 name: 'Schmidt Murray'
//             }
//         ],
//         favoriteFruit: 'apple'
//     },
//     {
//         balance: '1345.79',
//         age: 21,
//         name: {
//             first: 'Carey',
//             last: 'Schwartz'
//         },
//         company: 'UXMOX',
//         email: 'carey.schwartz@uxmox.info',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Lilia Wiggins'
//             },
//             {
//                 id: 1,
//                 name: 'Snider Tanner'
//             },
//             {
//                 id: 2,
//                 name: 'Taylor Perez'
//             },
//             {
//                 id: 3,
//                 name: 'Raquel Castaneda'
//             },
//             {
//                 id: 4,
//                 name: 'Burris Mcmahon'
//             },
//             {
//                 id: 5,
//                 name: 'Henderson Osborn'
//             },
//             {
//                 id: 6,
//                 name: 'Carrillo Ortiz'
//             },
//             {
//                 id: 7,
//                 name: 'Herminia Puckett'
//             },
//             {
//                 id: 8,
//                 name: 'Shelby Ware'
//             }
//         ],
//         favoriteFruit: 'banana'
//     },
//     {
//         balance: '3261.11',
//         age: 30,
//         name: {
//             first: 'Trevino',
//             last: 'Mullins'
//         },
//         company: 'TERRASYS',
//         email: 'trevino.mullins@terrasys.org',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Corine Deleon'
//             },
//             {
//                 id: 1,
//                 name: 'Alta Walker'
//             },
//             {
//                 id: 2,
//                 name: 'Jeannie Santana'
//             },
//             {
//                 id: 3,
//                 name: 'Velazquez Oneill'
//             },
//             {
//                 id: 4,
//                 name: 'Perry Merrill'
//             },
//             {
//                 id: 5,
//                 name: 'Tabitha Mcintosh'
//             },
//             {
//                 id: 6,
//                 name: 'Shields Castillo'
//             }
//         ],
//         favoriteFruit: 'banana'
//     },
//     {
//         balance: '1659.17',
//         age: 20,
//         name: {
//             first: 'Gilliam',
//             last: 'Mendez'
//         },
//         company: 'ZENTHALL',
//         email: 'gilliam.mendez@zenthall.tv',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Nora Ratliff'
//             },
//             {
//                 id: 1,
//                 name: 'Simone Michael'
//             },
//             {
//                 id: 2,
//                 name: 'Lang Rose'
//             },
//             {
//                 id: 3,
//                 name: 'Priscilla Hester'
//             },
//             {
//                 id: 4,
//                 name: 'Stuart Barker'
//             },
//             {
//                 id: 5,
//                 name: 'Florine Mcintyre'
//             },
//             {
//                 id: 6,
//                 name: 'Karin Rosa'
//             },
//             {
//                 id: 7,
//                 name: 'Vinson Rutledge'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '2340.54',
//         age: 32,
//         name: {
//             first: 'Brewer',
//             last: 'Vargas'
//         },
//         company: 'QIMONK',
//         email: 'brewer.vargas@qimonk.co.uk',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Tamera Sharp'
//             },
//             {
//                 id: 1,
//                 name: 'Jackie Parks'
//             },
//             {
//                 id: 2,
//                 name: 'Wanda Merritt'
//             },
//             {
//                 id: 3,
//                 name: 'Castillo Sloan'
//             }
//         ],
//         favoriteFruit: 'apple'
//     },
//     {
//         balance: '1736.91',
//         age: 24,
//         name: {
//             first: 'Newman',
//             last: 'Wynn'
//         },
//         company: 'VISALIA',
//         email: 'newman.wynn@visalia.name',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Lopez Mccarthy'
//             },
//             {
//                 id: 1,
//                 name: 'Melinda Diaz'
//             },
//             {
//                 id: 2,
//                 name: 'Silva Shepherd'
//             },
//             {
//                 id: 3,
//                 name: 'Claudia Contreras'
//             },
//             {
//                 id: 4,
//                 name: 'Jenna Golden'
//             },
//             {
//                 id: 5,
//                 name: 'Blair Hayden'
//             },
//             {
//                 id: 6,
//                 name: 'Antonia Woods'
//             },
//             {
//                 id: 7,
//                 name: 'Felecia Greer'
//             },
//             {
//                 id: 8,
//                 name: 'Sherry Howard'
//             },
//             {
//                 id: 9,
//                 name: 'Montgomery Cohen'
//             }
//         ],
//         favoriteFruit: 'apple'
//     }
// ];

//Решение
// function getEmailFromUsers(obj) {
//    return  obj.forEach(user => console.log(user.email));
// }
//
// function theMostFriends(obj) {
//     let maxFriends = [];
//
//     let getFriends = obj.map(item => item.friends);
//
//     for (let obj of getFriends) {
//         let keysOfObj = Object.keys(obj).length;
//         maxFriends.push(keysOfObj)
//     }
//
//     maxFriends = Math.max(...maxFriends)
//     let user = obj.filter(item => item.friends.length === +maxFriends);
//
//     return user.map(item => item.name);
// }
//
// function theMostBalance(obj) {
//
//     const Balance = obj.map((item) => item.balance);
//     let maxBalance = Math.max(...Balance);
//     let user = obj.find(item => +item.balance === maxBalance)
//     return `${user.company}`
// }
//
// function theLeastBalance(obj) {
//     const Balance = obj.map((item) => item.balance);
//     let minBalance = Math.min(...Balance);
//     let user = obj.find(item => +item.balance === minBalance)
//     return `${user.company}`
// }
//
// console.log('Электронные адреса пользователей:');
// getEmailFromUsers(users);
//
// console.log('Пользователи с наибольшим количеством друзей');
// for (let user of theMostFriends(users)) {
//     console.log(`${user.first} ${user.last}`)
// }
//
// console.log('Компании пользователей с наибольшим балансом:');
// console.log(theMostBalance(users));
//
// console.log('Компании пользователей с наименьшим балансом:');
// console.log(theLeastBalance(users));

//Обьекты 2

// Задание:
// Перепишите код так, чтобы метод print использовал контекст и поведение кода при этом не поменялось.

//     let obj1 = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//
//     print: function (obj) {
//         console.log("First Name: " + this.firstName); //this
//         console.log("Last Name: " + this.lastName); //this
//     }
// };
//
// obj1.print();

// Задание:
// Используя цикл for in выведите на экран имена и значения всех строковых свойств объекта.

//     let user = {
//     balance: '$1,250.89',
//     age: 24,
//     name: 'Golden Clements',
//     company: 'EWAVES',
//     email: 'golden.clements@ewaves.io',
//     friends: 5,
//     favoriteFruit: 'strawberry'
// }
//
// for (let keys in user) {
//     console.log(keys);
//     console.log(user[keys])
// }

// Задание:
// Создайте фабричный метод для создания объектов со свойствами name, price, ordered. Поменяйте код, который инициализирует массив products.
// Воспользуйтесь фабричным методом для инициализации массива.

// let products = [
//     createProduct('Бумага офисная А4, 80 г/м2, 500 л',280.25),
//     createProduct('Биндеры для бумаги 51 мм', 56),
//     createProduct('Ручка шариковая синяя', 12.5),
// ];
//
//
// function createProduct(name, price) {
//     return {
//         name,
//         price,
//         ordered: 0,
//     }
// }
//
// // цикл для получения количества покупаемых продуктов
// for (let index = 0; index < products.length; index++) {
//     const name = products[index].name;
//     const price = products[index].price;
//
//     products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
// }
//
// // цикл для расчета общей цены купленных продуктов
// let totalPrice = 0;
// for (let index = 0; index < products.length; index++) {
//     totalPrice += products[index].price * products[index].ordered;
// }
//
// alert(`Сумма Вашего заказа ${totalPrice}.`);
//
// let isFreeShipping = totalPrice > 1000;
// if (isFreeShipping) // иногда в условии используется только одна переменная.
// {
//     alert("Доставка будет бесплатной.");
// }

// Задание:
//     Перепишите код. Сделайте фабричный метод, который будет принимать два параметра firstName и lastName и создавать объект с двумя свойствами firstName и lastName.
//     Сделайте так, чтобы функция print стала методом объекта, который создается через фабричную функцию.
//     Используйте shorthand методы и shorthand свойства.

// let obj1 = createObj('Ivan', 'Ivanov')
// let obj2 = createObj('Jhon', 'Doe')
//
//
// function createObj(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         print() {
//             console.log("First Name: " + this.firstName);
//             console.log("Last Name: " + this.lastName);
//         }
//     };
// }
//
// obj1.print();
// obj2.print();

// Задание:
// Реализуйте метод showMostFavoriteFruit. Метод должен отображать фрукт, который чаще всего указывали как любимый на основе данных по пользователям из массива users.

// массив сгенерирован с помощью https://next.json-generator.com/
// let users = [
//     {
//         balance: '1250.89',
//         age: 24,
//         name: {
//             first: 'Golden',
//             last: 'Clements'
//         },
//         company: 'EWAVES',
//         email: 'golden.clements@ewaves.io',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Buchanan Austin'
//             },
//             {
//                 id: 1,
//                 name: 'Richmond Garrison'
//             },
//             {
//                 id: 2,
//                 name: 'Burns Cook'
//             },
//             {
//                 id: 3,
//                 name: 'Sally Mcpherson'
//             },
//             {
//                 id: 4,
//                 name: 'Nina Hood'
//             },
//             {
//                 id: 5,
//                 name: 'Rhonda Anderson'
//             },
//             {
//                 id: 6,
//                 name: 'Mathis Bowen'
//             },
//             {
//                 id: 7,
//                 name: 'Janie Carlson'
//             },
//             {
//                 id: 8,
//                 name: 'Brooke Reilly'
//             },
//             {
//                 id: 9,
//                 name: 'Peters Oliver'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '3637.94',
//         age: 23,
//         name: {
//             first: 'Francis',
//             last: 'Hebert'
//         },
//         company: 'XPLOR',
//         email: 'francis.hebert@xplor.biz',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Clements Glass'
//             },
//             {
//                 id: 1,
//                 name: 'Gutierrez Padilla'
//             },
//             {
//                 id: 2,
//                 name: 'Noelle Wilkinson'
//             },
//             {
//                 id: 3,
//                 name: 'Kim Sampson'
//             },
//             {
//                 id: 4,
//                 name: 'Luz Palmer'
//             }
//         ],
//         favoriteFruit: 'apple'
//     },
//     {
//         balance: '1106.44',
//         age: 31,
//         name: {
//             first: 'Hale',
//             last: 'Cross'
//         },
//         company: 'EARTHPURE',
//         email: 'hale.cross@earthpure.us',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Terri Clark'
//             },
//             {
//                 id: 1,
//                 name: 'Marie Joyce'
//             },
//             {
//                 id: 2,
//                 name: 'Howell Moses'
//             },
//             {
//                 id: 3,
//                 name: 'Juarez Marshall'
//             },
//             {
//                 id: 4,
//                 name: 'Corinne Grant'
//             },
//             {
//                 id: 5,
//                 name: 'Chandra Ferrell'
//             },
//             {
//                 id: 6,
//                 name: 'Emily Kidd'
//             },
//             {
//                 id: 7,
//                 name: 'Claudine Pollard'
//             },
//             {
//                 id: 8,
//                 name: 'Walter Cooper'
//             },
//             {
//                 id: 9,
//                 name: 'Isabella Hays'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '2502.43',
//         age: 25,
//         name: {
//             first: 'Delores',
//             last: 'Sykes'
//         },
//         company: 'ASSITIA',
//         email: 'delores.sykes@assitia.com',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Amy Fox'
//             },
//             {
//                 id: 1,
//                 name: 'Laurel Gaines'
//             },
//             {
//                 id: 2,
//                 name: 'Mcguire French'
//             },
//             {
//                 id: 3,
//                 name: 'Savage Rocha'
//             },
//             {
//                 id: 4,
//                 name: 'Durham Fowler'
//             },
//             {
//                 id: 5,
//                 name: 'Jacobson Clay'
//             },
//             {
//                 id: 6,
//                 name: 'Hamilton Pierce'
//             },
//             {
//                 id: 7,
//                 name: 'Johns Jefferson'
//             },
//             {
//                 id: 8,
//                 name: 'Avery Campbell'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '3651.54',
//         age: 21,
//         name: {
//             first: 'Ryan',
//             last: 'Bolton'
//         },
//         company: 'MOLTONIC',
//         email: 'ryan.bolton@moltonic.biz',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Weaver Buchanan'
//             },
//             {
//                 id: 1,
//                 name: 'Francesca Rice'
//             },
//             {
//                 id: 2,
//                 name: 'Sheppard Calhoun'
//             },
//             {
//                 id: 3,
//                 name: 'Schmidt Murray'
//             }
//         ],
//         favoriteFruit: 'apple'
//     },
//     {
//         balance: '1345.79',
//         age: 21,
//         name: {
//             first: 'Carey',
//             last: 'Schwartz'
//         },
//         company: 'UXMOX',
//         email: 'carey.schwartz@uxmox.info',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Lilia Wiggins'
//             },
//             {
//                 id: 1,
//                 name: 'Snider Tanner'
//             },
//             {
//                 id: 2,
//                 name: 'Taylor Perez'
//             },
//             {
//                 id: 3,
//                 name: 'Raquel Castaneda'
//             },
//             {
//                 id: 4,
//                 name: 'Burris Mcmahon'
//             },
//             {
//                 id: 5,
//                 name: 'Henderson Osborn'
//             },
//             {
//                 id: 6,
//                 name: 'Carrillo Ortiz'
//             },
//             {
//                 id: 7,
//                 name: 'Herminia Puckett'
//             },
//             {
//                 id: 8,
//                 name: 'Shelby Ware'
//             }
//         ],
//         favoriteFruit: 'banana'
//     },
//     {
//         balance: '3261.11',
//         age: 30,
//         name: {
//             first: 'Trevino',
//             last: 'Mullins'
//         },
//         company: 'TERRASYS',
//         email: 'trevino.mullins@terrasys.org',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Corine Deleon'
//             },
//             {
//                 id: 1,
//                 name: 'Alta Walker'
//             },
//             {
//                 id: 2,
//                 name: 'Jeannie Santana'
//             },
//             {
//                 id: 3,
//                 name: 'Velazquez Oneill'
//             },
//             {
//                 id: 4,
//                 name: 'Perry Merrill'
//             },
//             {
//                 id: 5,
//                 name: 'Tabitha Mcintosh'
//             },
//             {
//                 id: 6,
//                 name: 'Shields Castillo'
//             }
//         ],
//         favoriteFruit: 'banana'
//     },
//     {
//         balance: '1659.17',
//         age: 20,
//         name: {
//             first: 'Gilliam',
//             last: 'Mendez'
//         },
//         company: 'ZENTHALL',
//         email: 'gilliam.mendez@zenthall.tv',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Nora Ratliff'
//             },
//             {
//                 id: 1,
//                 name: 'Simone Michael'
//             },
//             {
//                 id: 2,
//                 name: 'Lang Rose'
//             },
//             {
//                 id: 3,
//                 name: 'Priscilla Hester'
//             },
//             {
//                 id: 4,
//                 name: 'Stuart Barker'
//             },
//             {
//                 id: 5,
//                 name: 'Florine Mcintyre'
//             },
//             {
//                 id: 6,
//                 name: 'Karin Rosa'
//             },
//             {
//                 id: 7,
//                 name: 'Vinson Rutledge'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     },
//     {
//         balance: '2340.54',
//         age: 32,
//         name: {
//             first: 'Brewer',
//             last: 'Vargas'
//         },
//         company: 'QIMONK',
//         email: 'brewer.vargas@qimonk.co.uk',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Tamera Sharp'
//             },
//             {
//                 id: 1,
//                 name: 'Jackie Parks'
//             },
//             {
//                 id: 2,
//                 name: 'Wanda Merritt'
//             },
//             {
//                 id: 3,
//                 name: 'Castillo Sloan'
//             }
//         ],
//         favoriteFruit: 'apple'
//     },
//     {
//         balance: '1736.91',
//         age: 24,
//         name: {
//             first: 'Newman',
//             last: 'Wynn'
//         },
//         company: 'VISALIA',
//         email: 'newman.wynn@visalia.name',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Lopez Mccarthy'
//             },
//             {
//                 id: 1,
//                 name: 'Melinda Diaz'
//             },
//             {
//                 id: 2,
//                 name: 'Silva Shepherd'
//             },
//             {
//                 id: 3,
//                 name: 'Claudia Contreras'
//             },
//             {
//                 id: 4,
//                 name: 'Jenna Golden'
//             },
//             {
//                 id: 5,
//                 name: 'Blair Hayden'
//             },
//             {
//                 id: 6,
//                 name: 'Antonia Woods'
//             },
//             {
//                 id: 7,
//                 name: 'Felecia Greer'
//             },
//             {
//                 id: 8,
//                 name: 'Sherry Howard'
//             },
//             {
//                 id: 9,
//                 name: 'Montgomery Cohen'
//             }
//         ],
//         favoriteFruit: 'apple'
//     }
// ];
//
// function showAllEmails() {
//     console.log("Электронные адреса пользователей:")
//     users.forEach(user => console.log(user.email));
// }
//
// function showHigestFriendCount() {
//     console.log("Пользователи с наибольшим количеством друзей");
//
//     let max = Number.MIN_VALUE;
//
//     users.forEach(user => {
//         if (max < user.friends.length)
//             max = user.friends.length;
//     });
//
//     users
//         .filter(user => user.friends.length == max)
//         .forEach(user => console.log(user.name.first + " " + user.name.last));
// }
//
// function showMinMaxBalance() {
//     let minBalance = Number.MAX_VALUE;
//     let maxBalance = Number.MIN_VALUE;
//
//     users.forEach(user => {
//         const currentBalance = +user.balance;
//         if (currentBalance > maxBalance)
//             maxBalance = currentBalance;
//         else if (currentBalance < minBalance) {
//             minBalance = currentBalance;
//         }
//     });
//
//     console.log("Компании пользователей с наибольшим балансом:")
//     users
//         .filter(user => user.balance == maxBalance)
//         .forEach(user => console.log(user.company));
//
//     console.log("Компании пользователей с наименьшим балансом:")
//     users
//         .filter(user => user.balance == minBalance)
//         .forEach(user => console.log(user.company));
// }
//
// function showMostFavoriteFruit() {
//     let allFruits = {};
//
//     users.forEach(fruits => {
//         if (allFruits[fruits.favoriteFruit]) {
//             allFruits[fruits.favoriteFruit]++
//         } else {
//             allFruits[fruits.favoriteFruit] = 1;
//         }
//     });
//
//     let arrFromValueByFruits = [];
//     for (let value in allFruits) {
//         arrFromValueByFruits.push(allFruits[value]);
//     }
//
//     let theMaxValue = Math.max(...arrFromValueByFruits);
//     let theFavorite = Object.keys(allFruits).filter(k => allFruits[k] === theMaxValue);
//
//     return console.log(`${theFavorite.join(', ')} - самые популярные фрукты!`)
// }
//
// showAllEmails();
// showHigestFriendCount();
// showMinMaxBalance();
// showMostFavoriteFruit();