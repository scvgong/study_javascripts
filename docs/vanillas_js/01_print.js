let name = "myeong" // 변수 선언 let
//undefined
console.log(name)
// VM251:1 myeong

let welcome = 'Hello World!'
//undefined
welcome
//'Hello World!'
let numbers = 55
//undefined
numbers
//55

let concats = 'String : ' + welcome
//undefined
concats = concats + ", Number:" + numbers
//'String : Hello World!, Number:55'
concats
//'String : Hello World!, Number:55'

alert(concats)
//undefined

`String : ${welcome}, number:${numbers}`
//'String : Hello World!, number:55'
let concats_tilt = `String: ${welcome}, Number: ${numbers}`
//undefined
concats_tilt
//'String: Hello World!, Number: 55'
console.log(concats_tilt)
//VM1759:1 String: Hello World!, Number: 55
