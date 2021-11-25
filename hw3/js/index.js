// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let array = [21,24,54,65,77];
// let text = ['samsung','apple','kia','bmw'];
// let all =[21,false,'apple',true,'kia'];
// console.log(array);
// console.log(text);
// console.log(all);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let array = [];
//  array[0] = 'Hello';
//  array[1] = 'Misis';
//  array[2] = 'Wilson';
//  array[3] =  'How are you';
//  console.log(array);
//  document.write(array);
//


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>hello world</div>`);
// }
//
//
// for (let i = 0; i < 10; i++) {
//      document.write(`<div>${i} - hello world</div>`);
// }
//
// let title =0;
// while(title<10){
//     document.write(`<div>Hello Vasya</div>`);
//     title++;
// }
//
// let titleOfTwo =0;
//  while(titleOfTwo <10){
//      document.write(`<div>${titleOfTwo } - Погода сьогодні буде гарна</div>`);
//      titleOfTwo ++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let stringArray =['Mercedes','Samsung','Cat','New York','2021','Tower','Dj','steam','google'];
//  for (i = 0; i < stringArray.length; i++) {
//      console.log(stringArray[i])
//  }


// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//   let number = [4,7,21,56,77,62,10,44,12,33];
//   for (i = 0; i < number.length; i++) {
//       console.log(number[i])
//  }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
//   let array = [2002, 'seven', false, 'boy', true,23,45,'Boris',{},[],'hockey'];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let Arrayboollean = [2002, 'seven', false, 'boy', true,23,45,'Boris',{},[],'hockey'];
// for (i = 0; i < Arrayboollean.length; i++) {
//      if (typeof Arrayboollean[i] === 'boolean') {
//          console.log(Arrayboollean[i]);
//      }
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

//     let Arraynumber = [2002, 'seven', false, 'boy', true,23,45,'Boris',{},[],'hockey'];
// for (i = 0; i < Arraynumber.length; i++) {
//      if (typeof Arraynumber[i] === 'number') {
//        console.log(Arraynumber[i]);
//    }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let Arraystring = [2002, 'seven', false, 'boy', true,23,45,'Boris',{},[],'hockey'];
// for (i = 0; i < Arraystring.length; i++) {
//     if (typeof Arraystring[i] === 'string') {
//          console.log(Arraystring[i]);
//     }
//  }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let emptyArray = [];
// emptyArray [0] ='Golden';
// emptyArray [1] ='Long';
// emptyArray [2] ='Begginer';
// emptyArray [3] = 1983;
// emptyArray [4] = true;
// emptyArray [5] ='Travel';
// emptyArray [6] ='In';
// emptyArray [7] ='India';
// emptyArray [8] =false;
// emptyArray [9] ='People will drink';
// for (let i = 0; i < emptyArray.length; i++) {
//      console.log(emptyArray[i]);
//  }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


  // for (let i = 0; i < 10; i++) {
  //   console.log('начальный цикл: ' + i + ' ');
  //   document.write('начальный цикл: ' + i + ' ');
 // }




// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i =0; i < 100;i++){
//     console.log('На улице 2021 год:' + i +'');
//     document.write('На улице 2021 год:' + i +'');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i =0; i < 100;i+=2){
//     console.log('На улице начался цикл дождей: ' + i + ' ');
//     document.write('На улице начался цикл дождей: ' + i + ' ');
// }


//  - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if(i % 2 === 0){
//         console.log('Начало очередного раунда : ' + i + ' ');
//         document.write('Начало очередного раунда : ' + i + ' ');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//    for (let i = 0; i < 100; i++) {
//      if(i % 2 === 1){
//          console.log('Начало очередного раунда : ' + i + ' ');
//         document.write('Начало очередного раунда : ' + i + ' ');
//     }
// }
