function sum(n1, n2) {
    return n1 + n2;
}

function sum(n1, n2) {
    console.log(1111);
} // 이렇게 하면 이게 sum을 덮어쓰기

var ddd = sum;

function sum(n1, n2) {
    console.log(2222);
}

console.log(ddd(10, 20));