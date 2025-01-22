const santances ='we are bangladeshi our neibour is rendia they have no toilet';
const santance = santances.split(' ');
const firstCapital = santance.map(num => num[0].toLocaleUpperCase() + num.slice(1))
// console.log(firstCapital.join(' '));


const santances2 ='we are bangladeshi our neibour is rendia they have no toilet';
const setArr=santances2.split(' ')
let array = [];
function name(params) {
    for(const sat of params){
      let ofset = sat[0].toLocaleUpperCase()+sat.slice(1);
        array.push(ofset)
    }
    return array.join(' ');
}
console.log(name(setArr));




