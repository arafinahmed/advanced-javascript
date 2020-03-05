let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    if(result<5){
        var mood = "happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}

console.log(sum(3,6));

console.log(bonus);