// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User (id,name,surname,email,phone){
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// const Arruser=[
//     new User(23,'Ira','Petrova','IraPetrova@gmaio.com','0668777777'),
//     new User(33,'Tina','Ivanova','Ivanova@ex.ua','0981134567'),
//     new User(18,'Andrey','Ololo','ololo@bbb.ua','023654587'),
//     new User(45,'Oleg','Olegov','Oo@meta.ua','1234456'),
//     new User(55,'Anna','Bora','Bo@io.ua','09876342342'),
//     new User(34,'Vitaly','Ruev','Rv@mail.ua','03365878'),
//     new User(22,'Bogdan','Andreev','Aa@gmail.com','044654974'),
//     new User(19,'Dima','Petrov','Petrov@dd.ua','055658744'),
//     new User(24,'Antonina','Tronin','Tronin@gmail.com','065456844'),
//     new User(76,'Yulia','Galushka','Gl@meta.ua','064865456')
//
// ];
// console.log(Arruser);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
//
//  let filterUser = Arruser.filter((item) => {
//      if (item.id % 4 === 0){
//      return item
//      }});
//  console.log(filterUser);
//
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//
//  console.log(Arruser.sort((a, b) => a.id - b.id));
//
//
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
//
//   class  Client{
//       constructor(id,name,surname,email,phone,order) {
//           this.id = id;
//                    this.name = name;
//                    this.surname = surname;
//                    this.email = email;
//                    this.phone = phone;
//                    this.order = order;
//       }
//   }
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let Arrayempty =[
//     new Client(1,'Gordon','Freeman','hl3@valve.com','055456546',['pc','ps5','steam']),
//     new Client(2,'Alex','Frolov','Af@gmail.com','056589785',['coffee','tea','water']),
//     new Client(3,'lya','Provit','hp@gmail.com','055456546',['cartoon','movie','video']),
//     new Client(4,'Alisa','Ivanova','Iv@mail.com','066423446',['freelance','seo','copyriter']),
//     new Client(5,'Bob','Anderson','Anderson@gmail.com','0534344346',['java','backend','php']),
//     new Client(6,'Tanya','Ololosha','olosha@gmail.com','05434546',['medic','teeth','stomatology']),
//     new Client(7,'Ira','Petrenko','Pet23@gmail.com','053536546',['economic','Bank','money']),
//     new Client(8,'Andrey','Koval','andreyK@gmail.com','055456546',['school','teaching','biology']),
//     new Client(9,'Alina','Morkva','Morkva@gmail.com','06354786546',['apple','pineaple','orange']),
//     new Client(10,'Petr','Malinovsky','Malina@mail.com','063343226',['phone','apple','samsung']),
//
//
//
// ];
//   console.log(Arrayempty);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
//  let sortCLients = Arrayempty.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)