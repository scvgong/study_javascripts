// 변수 유효범위
// var (사용권장 x), let , const
// var -> 함수레벨의 유효범위, 메모리 누수로 발전할수 있음
// let, const -> 블럭레벨의 유효범위

function scope(){
    if(true){
        const a = 123 // 변수 a는 if문 유효범위에 있다. 
        console.log(a)    
    }
    
}
scope()