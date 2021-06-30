function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function getApple(){
//     await delay(1000);
//     return '🍎';
// }

function getApple(){
    return delay(1000).then(() => "🍎");
    // 받을 리턴 변수가 없기 때문에 ()만 쓴다. 먄약 앞전에 resolve("🍎") 했다면,
    // 콜백 함수 매개변수를 따로 지정해야만 했을 것이다.
}

async function getBanana(){
    await delay(1000);
    // web API 안에서 우리가 setTimeout()에서 2번째 인자로 넣은 1000ms 동안 타이머가 돌아간다.
    // 1000ms 이후 해당 콜백은 call stack으로 보내지지 않고, 대신 (micro)queue 라는 공간으로 보내짐
    // queue에서 대기하는 동안 리턴하지 않음. 반면에 await은 *해당 로직을 다 처리하고* 
    // 포함된 마더 함수를 queue에 보냄에 따라 일시 정지 시킴.
    return '🍌';
    // 콜백 함수가 call stack에 추가되고 호출된 다음 값을 리턴하고 스택에서 빠져나온다.
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    console.log(applePromise);
    console.log(bananaPromise);
    // pending (대기) 아직 로직 처리가 완료되지 않은 경우, 프로미스만 반환.
    // 아직 1초가 안 지난 상태.
    const apple = await applePromise;
    // promise가 resolve되서 then()에서 받는 그런 결과값을 마치 일반함수의 리턴값을 받듯이
    // 이렇게 쓸수 있음.
    // applePromise의 *로직을 다 처리하고* 함수를 일시 정지 시킨다. 
    // 이 마더함수 자체를 queue로 이동시킴.(마더함수는 queue에서 대기)
    console.log(apple);
    // fulfilled 로직 처리가 완료되어, 결과 값을 반환하는 경우.
    const banana = await bananaPromise;
    console.log(banana);
    console.log(applePromise);
    console.log(bananaPromise);

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
console.log('실험 중');

// https://kkangdda.tistory.com/77?category=830981 참고할 것.