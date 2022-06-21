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



