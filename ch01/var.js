var n1; //호이스팅 O
var nn2 = 20;
n1 = 30;
var nn3 = n1 + nn2;

console.log('nn3 : ' + nn3);
console.log('10' + 10); //이건 문자열합치기인데
console.log('10' - 10); //이건 계산됨 자바는 에러터짐
console.log('10' * 10); //이건 계산됨22 자바는 에러터짐
console.log(10 + 10 + '10');
console.log(10 + 10 * '10');
console.log('10' + 10 + 10);

let n2; //호이스팅X
n2 = 10;
const N3 = 10; //호이스팅 X
