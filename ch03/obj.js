function Human(name, age){
    this.name = name;
    this.age = age;

    this.showMe = function() {
        console.log(`My name is ${this.name}, age is ${this.age}.`);
    }
}
// 객체는 속성과 메소드

let h1 = new Human('홍길동', 20);
Human.prototype.hello = function(){
    console.log(`Hello ${this.name}`);
}
h1.height = 180;
let h2 = new Human('둘리', 120);

h1.showMe();
h2.showMe();

h1.hello();
h2.hello();

console.log("h1.height : " + h1.height);
console.log("h2.height : " + h2.height);


// 객체를 만드는 방법
// 함수로 만들기: 실제로는 거의 사용하지 않음 생성자 함수
// 변수={이러케 만들기} 한번쓰고 버리기 좋은
// class: ES6이후?