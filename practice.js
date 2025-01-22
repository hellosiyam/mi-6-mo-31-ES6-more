// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[1]);


// task-2: console .log  output: Petersburg, Herry
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

// console.log(students['2222'].address.city);
// console.log(students['3333'].name);


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);


// task-4 :
const oddNumber = [1, 3, 5, 7, 9];
const evenNumber = [];
for(const num of oddNumber){
    evenNumber.push(num+1);
}
// console.log(evenNumber);

const oddNumberArray = [1, 3, 5, 7, 9];
const task4 = oddNumberArray.map(num => num+1);
// console.log(task4);


// task-5:
const arrayofNumber = [33, 50, 79, 78, 90, 101, 30];
const task5 = arrayofNumber.filter(num => num % 10 === 0);
// console.log(task5);

// task-6:
const arrayoffind = [33, 50, 79, 78, 90, 101, 30];
const task6 = arrayoffind.find(num => num % 10 === 0);
// console.log(task6);


// Task-7:
const instractor = [
    {name : 'Nodi', age: 28, position: 'Senior'},
    {name : 'Akil', age: 26, position: 'Junior'},
    {name : 'Shobuj', age: 23, position: 'Senior'},
]
const task7 = instractor.filter(nam => nam.position === 'Senior');
// console.log(task7);

// Task -8:
const people = [
    {name : 'Meena', age: 20},
    {name : 'Rina', age: 15},
    {name : 'Suchorita', age: 22},
]
let sum = 0;
for(const ages of people){
    const ageSum = ages.age;
    sum+=ageSum
}
// console.log(sum);

// Task- 8.2:
const people1 = [
    {name : 'Meena', age: 20},
    {name : 'Rina', age: 15},
    {name : 'Suchorita', age: 22},
]
const task8 = people1.reduce((first, last)=> first + last.age, 0);
console.log(task8);






