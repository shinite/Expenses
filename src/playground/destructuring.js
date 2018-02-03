//Object Destructuring
// const person={
//   name:'sha',
//   age:'23',
//   location:{
//     city:'nainital',
//     temp:16
//   }
// };
//
// //setting defaults
// const {name : firstName = 'Anonymous', age} =person;
//
// console.log(`${firstName} is ${age} years old`);
//
//
// // if(person.location.city && person.location.temp){
// // console.log(`Its ${person.location.temp} in ${person.location.city}`);
// // }
// //renaming
// const {city, temp: temperature} = person.location;
//
// if(city && temperature){
// console.log(`Its ${temperature} in ${city}`);
// }

//
// const book={
//   title:'Ego is the Enemy',
//   author:'Ryan Holiday',
//   publisher:{
//     name:'Penguin'
//   }
// };
//
// const {name : publisherName = 'self-Published'}=book.publisher;
//
// console.log(publisherName);//Penguin,self-Published(defaults)



//Array Destructuring

const address=['1299 S Juniper Street','Philadelphia','Pennyslvania','19147'];
const [street, city, state = 'NewYork', zip] = address;
console.log(`You are in ${city} ${state}`);


const item = ['coffee', '$2.00','$2.50','$2.75'];

const [buyitem,,medium]= item;
console.log(`A medium ${buyitem} costs ${medium}`);
