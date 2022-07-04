// 클래스 안에 있으면 메소드... 밖에 있으면 함수...

function m1() {
    console.log('-- m1 fn called --');
    return 1;
}

function m2() {
    console.log('-- m2 fn called --');
}

// true : !0, !"", true, 객체, 배열
// false : 0, "", false, undefined, null

if(m1() && m2()) {
    console.log('이건 flase');
}

if(m1() || m2()) {
    console.log('이건 true');
}