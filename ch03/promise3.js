function fn1() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(10);
        }, 2000);
    });
}

function fn2(val) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(val + val);
        }, 1000);
    });
}

let p1 = fn1();
// p1.then(function(result){
//     console.log(result);
//     let p2 = fn2(result);
//     p2.then(function(result2){
//         console.log('result2 : ' + result2);
//     });
// });

p1.then(function(result){
    return result;              // 이게 프로미스로 감싸져서...
})
.then(function(result){
    return fn2(result);         // 이렇게 된다
})
.then(function(result){
    console.log('result : ' + result);
})
