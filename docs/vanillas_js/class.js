const heropy = {
    firstName : 'Heropy',
    lastName : 'Park',
    getFulName : function (){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(heropy.getFulName()) // Heropy Park

const amy = {
    firstName : 'Amy',
    lastName : 'Clark',
    getFulName : function (){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(amy.getFulName()) // Amy Clark

const neo = {
    firstName : 'Neo',
    lastName : 'Smith',
    getFulName : function (){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(neo.getFulName()) // Neo Smith

/////////////////////////////////////////////////////// 클래스화

function User(first, last){
    this.firstName = first
    this.lastName = last
}
User.prototype.getFulName = function() { // prototype
    return `${this.firstName} ${this.lastName}`
}

const heropy1 = new User('Heropy', 'Park') // 생성자 함수
const amy1 = new User('Amy', 'Clarke') // 생성자 함수
const neo1 = new User('Neo', 'smith') // 생성자 함수

console.log(heropy1.getFulName())
console.log(amy1.getFulName())
console.log(neo1.getFulName())