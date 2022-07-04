let arr = [2, 6, 10, 11, 22, 1, 7];

// let sum = arr.reduce((accumulator, currentNumber) => accumulator + currentNumber);
// console.log(sum);

// arr.reduce(function(total, val){
//     console.log(`total : ${total}`);
//     console.log(`val : ${val}`);
//     return total + val;
// }, 0);

let result = arr.reduce(function(acc, item){
    acc.push(item * 2);
    return acc;
}, [])
console.log(result);

let result2 = arr.map(function(item){
    return item * 2
});

console.log(result2);