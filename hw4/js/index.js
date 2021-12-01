// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


//
// function areaRectangle(a, b) {
//     let sRectangle = a * b;
//     return sRectangle;
// }
// console.log(areaRectangle(40, 40))
// document.write('Площадь прямоугольника: ' + areaRectangle(40, 40))


//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH



// function Cylinder(r, h) {
//     let sCylinder = 2 * 3.14 * r * h;
//     return sCylinder;
// }
// console.log(Cylinder(10,10))
// document.write('Площадь цилиндра: ' + Cylinder(30, 30))


// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5,'hello world', 'BMW'];
//  function dataArray (array) {
//      for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//      }
//  }
//  dataArray(array)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function dataP (text) {
//     document.write(`<p>${text}</p>`)
//     document.write(`<p>${text}</p>`)
//     document.write(`<hr>`)
//
// }
// dataP('рандомный текст')


//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUl(bru) {
//     document.write(`<ul>`)
//     document.write(`<li>${bru}</li>`)
//     document.write(`<li>${bru}</li>`)
//     document.write(`<li>${bru}</li>`)
//     document.write(`</ul>`)
// }
// createUl('Text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function createUlDinamic(text, number) {
//     document.write(`<ul>`)
//      for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//      }
//      document.write(`</ul>`)
//  }
//  createUlDinamic('список товаров', 9);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let anyArray = ['Sveta Petrova','Andrey Petrov', 1994, true];
// function primitives (array){
//     document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//            document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(anyArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let newArray = [{id: 1, name: 'Tanya', age: 20}, {id: 2, name: 'Sasha', age: 59}, {id: 3, name: 'Kolya', age: 11}];
// function objArray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(newArray);
