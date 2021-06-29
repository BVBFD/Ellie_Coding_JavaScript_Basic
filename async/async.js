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
    // 여기서 실행대기 위로 올라가서 프로미스 함수 fulfilled 되면 밑으로 와서 await 구문 실행.
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

// 함수를 위로 가서 호출하고, 함수 본문이 실행되는 도중에 
// await 구문 (*)로 표시한 줄에서 실행이 
// 잠시 '중단’되었다가 프라미스(위에서)가 처리되면 실행이 재개됩니다. 
// 이때 프라미스 객체의 result 값이 변수 result에 할당됩니다. 
// 따라서 위 예시를 실행하면 1초 뒤에 '완료!'가 출력됩니다.
// await('기다리다’라는 뜻을 가진 영단어 – 옮긴이)는 말 그대로 프라미스가 처리될 때까지 
// 함수 실행을 기다리게 만듭니다. 프라미스가 처리되면 그 결과와 함께 실행이 재개되죠.
// 프라미스가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 
// 할 수 있기 때문에, CPU 리소스가 낭비되지 않습니다.
// await는 promise.then보다 좀 더 세련되게 
// 프라미스의 result 값을 얻을 수 있도록 해주는 문법입니다. 
// promise.then보다 가독성 좋고 쓰기도 쉽습니다.

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

// 프로미스를 이행했을 때 할 일은 then() 호출로 정의하고,
// 거부됐을 때 할 일은 catch() 호출로 정의

