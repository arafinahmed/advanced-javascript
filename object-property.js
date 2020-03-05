const students = [
    {id : 21, name: 'Omar Sunny'},
    {id : 31, name: 'Manna'},
    {id : 41, name: 'Omar Sunny 2'},
    {id : 51, name: 'Manna 22'}
]

const data = students.map(x => x.name);
const pondit = [];
for(let i=0; i<students.length; i++){
    pondit.push(students[i].name);
}
console.log(data);
console.log(pondit);

const bigger = students.filter(s => s.id>50);
console.log(bigger);