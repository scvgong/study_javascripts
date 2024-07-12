//형 변환(Type conversion)

const a = 1
const b = '1'

console.log(a == b) // 동등 연산자, 형변환 발생, 안쓰는걸 권장 의도치 않는 결과값 출력

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false' , -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN(Not a Number)

if(true){
    console.log(123)
}