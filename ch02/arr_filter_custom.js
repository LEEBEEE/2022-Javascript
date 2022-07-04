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
    }
}
let resultArr = arr.filter(function(item, idx){
    console.log(`${idx}: ${item}`);
    if(item <= 8) {
        return true;
    }
});
console.log(resultArr);