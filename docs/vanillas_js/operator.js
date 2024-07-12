// 산술 연산자
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)
////////////////////////////////

// 할당 연산자
let a = 2
//a = a + 1
a += 1
// a = a -1
a -= 1
// a = a * 1
a *= 1
// a = a / 1
a /= 1

console.log(a)

////////////////////////////////

// 비교 연산자
const b = 1
const c = 1

console.log(a === b) // 일치 여부 확인 true or false 
console.log(a !== b) // 불일치 여부 확인 true or false 
console.log(a < b)
console.log(a > b)
console.log(a >= b) // 크거나 같다.
console.log(a <= b) // 크거나 같다.

function isEqual(x,y){
    return x === y
}

console.log(isEqual(1,1)) // true
console.log(isEqual(2,'2')) // false, 숫자와 문자 데이터 타입은 서로 비교 불가능

////////////////////////////////

// 논리 연산자
const e = 1 === 1
const f = 'AB' === 'AB'
const g = true

console.log(e) // true
console.log(f) // true
console.log(g) // true

console.log('&&: ', e && f && g) // and
console.log('||: ', e || f) // or
console.log('!: ', !e) // not

////////////////////////////////

//삼항 연산자
const h = 1 < 2

if(h){
    console.log('참')
} else {
    console.log('거짓')
}

//if 문 간소
console.log(a ? '참' : '거짓') // a ? true면 여기 값 출력 : false면 여기 값 출력