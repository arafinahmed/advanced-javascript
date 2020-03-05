const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

function square(element){
    return element*element;
}

const sq = element => element*element;

const res = numbers.map(function square(element){
    return element*element;
})
// console.log(output);
console.log(res);

const result = numbers.map(x=>x-1);
console.log(result);

console.log("\n");

const bigger = numbers.filter(x => x>5);
console.log(bigger);