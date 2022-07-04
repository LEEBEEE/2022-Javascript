let p1 = new Promise(function(resolve){
    resolve(1);
});

let p2 = p1.then(function(result){
    return 10;
});

p2.then(function(result) {
    console.log('result : ' + result);
});

p1.then(function(result){
    resolve(10);
});