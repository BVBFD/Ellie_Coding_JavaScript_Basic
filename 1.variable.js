// 1. use strict
// 자바스크립트만의 비정상적인 활동 막아줌 변수 선언 안해줬는데 그냥 쓸수 있다던지 그런 것
'use strict';

// 2. Variable
let globalName = "global name";
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting  어디에서 선언했냐에 상관없이 항상 선언을 제일 위로 끌어올리는 것.
// var block scope 지역 변수가 없다. 지역 변수여도 글로벌 변수로 정의됨 왜?? 끌어올리니깐..
// 그래서 var는 절대 쓰면 안된다.

age = 4;
var age;
console.log(age);

// 3. const 한번 할당되면 값이 절대 바뀌지 않음 
// 왠만하면 const로 값을 선언해라.. (개발자)
const daysInWeek = 7;
const maxNumber = 5;

// 4. variable types
const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 5. bigInt (fairy new, don't use it yet)
const bigInt = 12321378658567606459459592174n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// 6. string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// 7. boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// 8. null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// 9. undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);

// 10. symbol, creat unique identifiers for objects
// 고유한 식별자가 필요할 때 쓰는 아이...
// 동일한 string으로 작성했어도 다른 symbol로 주어지기 때문에 같지 않음.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 같은 value 인자를 주고 생성하더라도 값은 같지 않음.
// symbol()로부터 반환되는 값은 항상 고유하다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// 동일한 symbol을 사용하고 싶다면 symbol.for()를 이용해라.!
console.log(`value: ${gSymbol1.description}, type: ${gSymbol2.description}`);
// symbol은 그냥 출력하면 오류남.
// 그래서 항상 .description 으로 string 으로 변환해서 출력해야 제대로 나옴.

// 10.5 object, real-time object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;

// 11. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));  // h 
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

// 이미 string에서 편집하는 중에 number로 type을 내가 바꾸었기 때문에 오류가 생김.
// 그래서 typeScript가 나옴.