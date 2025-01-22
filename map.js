const numbers = [10, 15, 20, 25, 30];

const math2 = numbers.map(num => num*4)
// console.log(math2);

// function dubboled(num) {
//     console.log(num);
//     return num*2
// }
// const math =numbers.map(dubboled);
// console.log(math);

// let dubboled =[];
// for(const num of numbers){
//     const dubol = num * 2;
//     dubboled.push(dubol)
// }
// console.log(dubboled);


// const numbersArray = [5, 10, 15, 25, 30];

// function sum(num) {
//     return num+5;
// }

// const total = numbersArray.map(sum);
// console.log(total);

// const numberOfArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const dubol = numberOfArray.map(num => num*10);
// console.log(dubol);

const nameof = ['siyam', 'rohul', 'asif', 'nabil', 'abir'];
// const nameLenth = nameof.map(nam => nam.length);
const nameLenth = nameof.map(nam => nam[0].toUpperCase()+nam.slice(1));
console.log(nameLenth);