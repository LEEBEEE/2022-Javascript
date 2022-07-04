let arr = {
    '0': 2,
    '1': 6,
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
    },
    'filter' : function(cb){
        let tempArr = [];
            for(let i=0; i<this.length; i++){
                let val = this[i];
                if(cb(val, i)){
                    tempArr.push(val);
                }
            }
        return tempArr;
    },
    'map' : function(cb) {
        let newArr = [];
            for(let i=0; i<this.length; i++){
                newArr.push(cb(this[i], i, ))
                // let val = this[i];
                // let result = cb(val, i);
                // newArr.push(result);
            }
            return newArr;
    }
}


let resultArr = arr.map(function(item){
    if(item < 10){
        return item * 2;
    }
    return item;
});

console.log(resultArr);

let result2Arr = arr.map(function(item){
    return item;
});

console.log(result2Arr);
