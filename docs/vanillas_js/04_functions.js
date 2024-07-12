// function 기본 구문
function function_name(params) {
    return 0;
}
// call function
function_name(5);

//예제
function function_name(params) {
    return params;
}
//undefined
function_name(5)
//5

function calculateSum(param_first,param_second) {
    result = param_first + param_second;
    return result;
}
//undefined
result = calculateSum(3,5);
//8

//arrow function 기본 구문
let arrow_function = (params) => {
    return 0;
}

//arrow function 내부 사용 기본 구문
(params) => {
    console.log()
}

// 객체데이터를 축양형으로 할떼
const doubleArrow = x => ({name: 'Heropy'})

// 즉시실행함수 1, 즉시실행함수 코드 전에 ;으로 마무리 해야된다.
(function (){
    console.log(a*2)
})();

// 즉시실행함수 2
(function (){
    console.log(a*2)
}());

// 호이스팅, 함수 선언부가 유효범위 최상단으로 끌려올려지는 현상
const a = 8

double()

function double() {
    console.log(a * 2)
}

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
    console.log('hey')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click',() => {
    clearTimeout(timer)
})

const timer1 = setInterval(() => {
    console.log('hey')
}, 3000)

const h1El1 = document.querySelector('h1')
h1El.addEventListener('click',() => {
    clearInterval(timer1)
})

// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
function timeout(cb){
    setTimeout(() => {
        console.log('heropy')
        cb()
    }, 3000)
}
timeout(() => {
    console.log('done')
})