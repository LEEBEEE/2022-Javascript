let arr = [2, 6, 10, 11, 22, 1, 7];
let sum = 0;
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
}

console.log(`sum : ${sum}`);

let evenSum = 0;
arr.forEach(function(item) {
    if(item%2 == 0){
        evenSum += item;
    }
});
console.log(`evenSum : ${evenSum}`);

arr.forEach(function(item, index) {
    if(index < 2){
        console.log(`item : ${item}`);
}
});

let sum2 = 0;
arr.forEach(function(item) {
    sum2 += item;
});
console.log(`sum2 : ${sum2}`);