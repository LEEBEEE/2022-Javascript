let arr = [2, 6, 10, 11, 22, 1, 7];
// console.log(arr);
let resultArr = arr.filter(function(item, idx){
    console.log(`${idx}: ${item}`);
    if(item <= 8) {
        return true;
    }
});

console.log(resultArr);

let newArr = [];
newArr.push(10);
newArr.push(12);
console.log(newArr);
/*
newArr[0] = 10;
newArr[1] = 12;
newArr[5] = 14;
console.log(newArr);
newArr.length = 1;
console.log(newArr);
*/