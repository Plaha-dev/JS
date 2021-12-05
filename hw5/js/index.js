// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.




//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// const Rectangle = (a, b) => {
//      return a * b;
//  }
// console.log(Rectangle(10, 10));
// document.write('Площадь прямоугольника: ' + Rectangle(50, 50));




// - створити функцію яка обчислює та повертає площу кола

 // const Circle = (r) => {
 //     let radius = r ** 2;
 //     return 3.14 * radius;
 // }
 // console.log(Circle(70));
 // document.write('Площадь круга: ' + Circle(45));


// - створити функцію яка обчислює та повертає площу циліндру

 // const Cylinder = (r, h) => {
 //     return 2 * 3.14 * r * h;
 // }
 // console.log(Cylinder(66,45));
 // document.write('Площадь цилиндра: ' + Cylinder(66, 45));

// - створити функцію яка приймає масив та виводить кожен його елемент


 // let array = [5,6,7,8,9, 'Nokia', 'Samsung'];
 //
 // const dataArray =  (array) => {
 //     for (let i = 0; i < array.length; i++) {
 //        document.write(array[i]);
 //     }
 // }
 // dataArray(array);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const dataP =  (hello) => {
//     document.write(`<p>${hello}</p>`);
//     document.write(`<p>${hello}</p>`);
//     document.write(`<hr>`);
// }
// dataP('hello');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


 // const createUl = (Hi) => {
 //     document.write(`<ul>`);
 //     document.write(`<li>${Hi}</li>`);
 //     document.write(`<li>${Hi}</li>`);
 //     document.write(`<li>${Hi}</li>`);
 //     document.write(`</ul>`);
 // }
 // createUl('Text');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

 // const createUlDinamic = (Apple, number) => {
 //     document.write(`<ul>`)
 //     for (let i = 0; i < number; i++) {
 //         document.write(`<li>${Apple}</li>`);
 //     }
 //     document.write(`</ul>`)
 // }
 // createUlDinamic('empty li', 9);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


 // let anyArray = ['Sveta Kozlova', 2002, 'Andrey Ivanov',true];
 //
 // const primitives = (array) => {
 //     document.write(`<ol>`)
 //         for (let i = 0; i < array.length; i++) {
 //             document.write(`<li>${array[i]}</li>`);
 //         }
 //     document.write(`</ol>`)
 // }
 // primitives(anyArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let newArray = [{id: 1, name: 'Pavel', age: 15}, {id: 2, name: 'Kolya', age: 30}, {id: 3, name: 'Ivan', age: 45}];
//
//  const objArray = (array) => {
//      for (const arrayElement of array) {
//          document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//      }
//  }
//  objArray(newArray);