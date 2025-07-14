const add = (a, b) => {
    return a + b
}
// console.log(add(5, 3)) // 예상 결과: 8


const minus = (a, b) => {
    return a - b
}
// console.log(minus(60, 20)) // 예상 결과: 40

const introduce = (name, age) => {
  return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.'
}
// console.log( introduce('홍길동', '10') )


const orderSandwich = (menu) => {
    let sandWich
        sandWich = '🥖 + 🥬 + 🍅 + 🥑 + 🥒'
    if (menu === 'vegan') {

    } else {
        sandWich = '🥖 + 🥬 + 🍅 + 🧀 + 🥓'
    }

    return sandWich
}
// 함수 테스트 - 아래 코드는 수정하지 마세요
// console.log("기본 샌드위치 주문: " + orderSandwich());
// console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
// console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

const result = () => {
    for(let i = 5; i >= 1; i--) {
        console.log(i);
    }
}
// result()

const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map(number => number + 1)
// console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]


const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.map(number => number % 2 === 0)// 여기에 코드를 작성하세요.
// console.log(evenNumbers); // 예상 결과: [2, 4, 6]



// 학생들의 정보가 담긴 배열
const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" }
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.map(student => student.major === 'Physics')
console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.map(student => student.name === 'David')// 여기에 코드를 작성하세요.
console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },