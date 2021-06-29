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
    }

    get age() {
        return this._age;
    } 

    set age(value) {
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
    draw(){
        super.draw(); // 부모의 메소드도 호출
        console.log('삼각형');
    }

    getArea(){    // overiding
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
console.log(rectagle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t 
console.log(triangle.toString());
