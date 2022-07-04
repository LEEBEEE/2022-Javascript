// let arr = [2, 6, 10, 11, 22, 1, 7];

let arr = {
    '0': 2,
    '1': 8,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    'length': 7,
    'forEach': function(cb) {
        for(let i=0; i<this.length; i++){
            cb(this[i], i, );          
        }
    }
}

let sum = 0;
arr.forEach(function(item){
    sum += item;
});
console.log(`sum : ${sum}`);

// forEach, filter, map / reduce