'use strict';
// Q1 make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
}

// Q2 make an array out of a string
{
    const fruits = '사과, 키위, 바나나, 체리';
    const result = fruits.split(',', 2);
    console.log(result);

}

// Q3 make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2 ,3 ,4 ,5];
    const result = array.reverse(); // 기존의 배열 값 또한 reverse 시킨다.
    console.log(result);
    console.log(array);
}

// Q4 make new array without the first two elements
{
    const array = [1, 2 ,3 ,4 ,5];
    //const result = array.splice(0, 2);  // 배열 자체를 수정하는 것
    const result = array.slice(2, 5); // 배열에서 원하는 부분만 return해서 받아오고 쓰면 됨 
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // const result = students.find(function(student){
    //     return student.score === 90; 
    // });
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    // const result = students.filter(function(student){
    //     return student.enrolled === true;
    // });
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores 
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score * 2);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    // const result = students.reduce((prev, curr) => { // return 한 값이 prev 로 전달된다.
    //     console.log('------------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length); 
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student => student.score))
    .sort((a, b) => a - b) // - 값이 나오면 첫번째 값이 뒤에 나오는 값보다 작은 것으로 간주하여 정렬이 되어짐  컨트롤 + 클릭해서 api 설명 읽어보기
    .join();
    console.log(result);
}