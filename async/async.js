// 1. async
async function fetchUser() {
    // do network request in 10 secs....
    return 'ellie';
}

// async 추가해주면 자동적으로 Promise로 바꾸어 줌.
// 결국 밑에꺼랑 똑같음

function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve('ellie');
        reject('error');
    });
}

const user = fetchUser();
user.then(console.log);


// 2. await
// await 문은 Promise가 fulfill되거나 reject 될 때까지 
// async 함수의 실행을 일시 정지하고, 
// Promise가 fulfill되면 async 함수를 일시 정지한 부분부터 실행합니다. 
// 이때  await 문의 반환값은 Promise 에서 fulfill된 값이 됩니다.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // 정의되지 않은 resolve 함수를 리턴 (나의 의견)
    // resolve를 호출
}

async function getApple() {
    await delay(1000);
    // throw 'error';
    // delay가 끝날때까지 기다려 프로미스는 기다린다.
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}
// 하지만 동기적인 코드로 보일수 있게끔 깔끔하게 할수 있음. 이런식으로
// await은 asnyc를 쓸때만 이용가능함.

// function getBanana() {
//     return delay(1000).then(() => '🍌');
// }
// 그 전에 인자를 받아 올게 없으니 파라메타 또한 없는 것이다.

// 비동기적으로 작동하는 코드

// function getBanana(){
//     return delay(3000)
//     .then(() => '🍌');
// }

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
} 

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')); 
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

