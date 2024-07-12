export default function random(){
    return Math.floor(Math.random() * 10)
}

// import random from './getRandom'

const a = random()
// if 문
if(a === 0){
    console.log('a is 0')
} else if(a === 2){
    console.log('a is 2')
} else {
    console.log('rest...')
}