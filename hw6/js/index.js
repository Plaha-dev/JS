// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.



// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let stringOne = 'hello world';
//  console.log(stringOne.length);
//
//  let stringTwo = 'javascript';
//  console.log(stringTwo.length);
//
//  let stringThree = 'javascript is cool';
//  console.log(stringThree.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let stringOne = 'hello world';
//  let upOne = stringOne.toLocaleUpperCase();
//  console.log(upOne);
//
//
//  let stringTwo = 'lorem ipsum';
//  let upTwo = stringTwo.toLocaleUpperCase();
//  console.log(upTwo);
//
//  let stringThree = 'javascript is cool';
//  let upThree = stringThree.toLocaleUpperCase();
//  console.log(upThree);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let stringOne = 'HELLO WORLD';
// let lowerOne = stringOne.toLowerCase();
// console.log(lowerOne);
//
// let stringTwo = 'LOREM IPSUM';
// let lowerTwo = stringTwo.toLowerCase();
// console.log(lowerTwo);
//
// let stringThree = 'JAVASCRIPT IS COOL';
// let lowerThree = stringThree.toLowerCase();
// console.log(lowerThree);


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let dirtyString = ' dirty string   ';
//  let trim = dirtyString.trim();
//  console.log(trim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

 // let str = 'Каждый охотник желает знать';
 // let arr = stringToarray(str);
 // document.writeln(['Каждый', 'охотник', 'желает', 'знать']);
 //
 // let stringToarray = (str) => {
 //      return str.split(' ');
 //  }
 //  let str = 'Каждый охотник желает знать';
 //  let arr = stringToarray(str);
 //  console.log(arr);
 //  document.writeln(['Каждый', 'охотник', 'желает', 'знать']);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, index) => {
//      return str.substr(0, index);
//  };
//  let str = 'Каждый охотник желает знать';
//  document.writeln(delete_characters(str, 7));



// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.

// let str = "HTML JavaScript PHP";
//  document.writeln(insert_dash(str));
//
//  let insert_dash = (str) => {
//      let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//      return splitJoinUpper;
//  }
//  let string = "HTML JavaScript PHP";
//  console.log(insert_dash(string));
//  document.write(insert_dash(string));



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let firstReg = (str) => {
//      if (!str) return str;
//      return str[0].toUpperCase() + str.slice(1)
//  };
//  document.write(firstReg('windows xp'));
//  console.log(firstUp('windows xpn'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//  let capitalize = (str) => {
//      return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
//  document.write(capitalize('go to chill'));
//  console.log(capitalize('go to chill'));