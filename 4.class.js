'use strict';

// 1. Class declarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: Hello!`);
    }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // 메모리에 올라가있는 데이터를 읽어오는 게 아니라 getter 호출
        // 바로 값을 메모리에 바로 할당하는게 아닌 setter(value) 호출
    }

    get age() { // 값을 리턴, 설정된 값 저장
        return this._age;
         // call stack이 닫히기 때문에 변수를 _age 이렇게 달리 설정.
    } 

    set age(value) { // 값을 설정하고 설정하기 때문에 value 받아와야함.
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', '-1');
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
    // private 변수는 클래스 내부에서만 접근가능하고 변경가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding'; // static 클래스가 가지고 있는 고유한 값 동일하게 반복적으로 사용되어지는 메소드가 있다.
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
// article1.publisher라고 하면 undefined가 뜸
// 왜냐하면 static 각 오브젝트(객체)에 지정되는 것이 아니라 클래스 그 자체에 지정되는 것임
Article.printPublisher();

// 5. Inheritance
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){ // overiding 함수 재정의 할수 있음, 위에 마더 함수 호출 안됨. 재정의 함수만 호출
        super.draw(); // 부모의 메소드도 호출(마더 함수)
        console.log('삼각형');
    }

    getArea(){    // overiding 함수 재정의 할수 있음
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectagle = new Rectangle(20, 20, 'blue');
rectagle.draw();
console.log(rectagle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instance of
// 왼쪽에 있는 객체가 오른쪽에 있는 클래스를 이용해서 생성되었는가 물어보는 것임.
console.log(rectagle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t 
console.log(triangle.toString());
