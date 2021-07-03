  
// JSON 
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol = Symbol("id"),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
    // 함수는 출력할때 json에 포함되지 않음 함수는 오브젝트에 있는 데이터가 아님 함수는 제외
    // 자바스크립트에만 있는 특별한 데이터도 json에 포함 안됨 ex) Symbol
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();
// json을 obj로 변환하게 되면 json파일은 데이터만 받기 때문에 obj로 변환된 json파일은 함수가 없음. 그래서 에러 발생

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// date안에 존재하는 API 쓸수 있음.