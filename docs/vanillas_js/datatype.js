console.log(typeof 'Hello World')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

function getType(data){
    return Object.prototype.toString.call(data).slice(8,-1)
}

// function 통해서 데이터 타입 확인 가능
console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

//export, import 통해서 파일 가져오기

// export default function getType(data){ -> getType() 내보내기
//     return Object.prototype.toString.call(data).slice(8,-1)
// }

// import getType(함수명 설정) from './getType' -> getType() 가져오기