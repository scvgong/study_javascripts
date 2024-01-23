//if 구문
let numbers = 10;
if(numbers > 0){
    console.log("숫자는 양수");
}
else if(numbers < 0){
    console.log("숫자는 음수");
}
else{
    console.log("0 입니다.");
};
//숫자는 양수

//삼항 연항자(Ternary Operation)
if(true){

}
else{

}

result = (true) ? 'as true' : "as false";

// Ternary 예제
result = (numbers > 0) ? '양수!' : "음수!";
//'양수!'
console.log(`숫자는 ${result}`);
//VM2281:1 숫자는 양수!