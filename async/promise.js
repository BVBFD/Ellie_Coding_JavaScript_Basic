'use strict'

const promise = new Promise((resolve, reject) => {
    console.log("doing something");
    setTimeout(() => {
        resolve('Mr.Lee');
        reject(new Error('No Network'));
    }, 2000);
});

promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

const fetchNumber = new Promise((resolve, reject) => 
{
    setTimeout(() => {
        resolve(1);
        reject(new Error('Num error'));
    }, 1000);
});

fetchNumber  // 이건 객체를 저장한 fetchNumber. 이건 객체
    .then((value) => {
        console.log(value * 2);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('감사합니다.');
    });

const getHen = () => // getHen에 function을 즉 함수를 넣은 것. 이건 함수 이게 바로 차이점.
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);  //setTimeout은 함수 넣어줘야함 mdn 잘 참고 해야함
    });

const getEgg = (hen) => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)


// 'use strict'

// // Promise is a JavaScript object for asynchronous operation.
// // State: pending -> fulfilled or rejected.
// // Producer vs Consumer

// // 1. Producer
// // when new Promise is created, the executor runs automatically.
// const promise = new Promise((resolve, reject) => {
//     // doing some heavy work (network, read files);
//     console.log('doing something...');
//     setTimeout(() => {
//         // resolve('ellie');
//         reject(new Error('no network'));
//     }, 2000);
// });

// // 2. Consumers: then, catch, finally
// promise
//     .then((value) => {  // value에는 정상적으로 출련된 ellie라는 값이 들어오게 됨.
//         console.log(value);
//     })
// // chaining then을 호출하고 또 따로 catch를 호출하고....
// // 결국 콜백함수에서 갈호 value는 객체(함수 포함)를 받아주는 것임.
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('finnally');
//     });


// // 3. Promise chaining
// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// fetchNumber
// // then은 값을 전달해도 되고 비동기 promise를 전달해도 된다.
// .then((num) => {return num * 2}) // num에 1이 전달이 되면
// .then((num) => {return num * 3})
// .then((num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num - 1), 1000);
//     });
// })

// .then(num => console.log(num));

// // 4. Error Handling
// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve('🐓'), 1000);
//   });

// // const getHen = function() {
// //     return '🐓';
// // }

// const getEgg = hen =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => 🥚`), 1000);
//   });

// // const getEgg = function(hen) {
// //     return `error! ${hen} => 🥚`;
// // }

// const cook = egg =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => 🍳`), 1000);
//   });

// // const cook = function(egg) {
// //     return `${egg} => 🍳`;
// // }

// getHen() //
//   .then(getEgg)
// //   .catch(error => {
// //     return '알약';
// //   })
//   .then(cook)
//   .then(console.log)
//   .catch(console.log);

//   // return 값을 파라미터 변수로 받는다고 생각하면 됨