let arr = [2, 6, 10, 11, 22, 1, 7];

// let resultArr =  arr.map(number => number * number);
// console.log(resultArr);


let newArr = arr.map(function(item, idx){
    return item + 1;
});

console.log(arr);
console.log(newArr);

let result2Arr = arr.map(function(item, idx){
    if(item < 10){
        return item*2;
    }
    else{
        return item;
    }
});
console.log(result2Arr);