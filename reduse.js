// const number = [10, 12, 15, 26, 90];
// const sum = number.reduce((first, last)=> first + last , 0)
// console.log(sum);

const array =[
    {name:'mac', price: 150000,},
    {name:'LENOVO', price: 120000,},
    {name:'Hp', price: 110000,},
    {name:'dell', price: 90000,}
];

// Map:
const map = array.map(nam => nam.name);
// console.log(map);

// map:
const filter1 = array.map(nam => nam.price);
// console.log(filter1);

// foeich:
// array.forEach(p => console.log(p.price));

// Find:
const find = array.find(p => p.price > 110000);
console.log(find);


// Reduce:
const priceElement = array.filter(p => p.price >100000);
// console.log(priceElement);



const price = array.reduce((first, last)=> first + last.price,0);
// console.log(price);

