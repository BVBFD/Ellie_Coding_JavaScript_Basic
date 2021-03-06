'use strict';

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function getApple(){
//     await delay(1000);
//     return '๐';
// }

function getApple(){
    return delay(1000).then(() => "๐");
    // ๋ฐ์ ๋ฆฌํด ๋ณ์๊ฐ ์๊ธฐ ๋๋ฌธ์ ()๋ง ์ด๋ค. ๋จ์ฝ ์์ ์ resolve("๐") ํ๋ค๋ฉด,
    // ์ฝ๋ฐฑ ํจ์ ๋งค๊ฐ๋ณ์๋ฅผ ๋ฐ๋ก ์ง์ ํด์ผ๋ง ํ์ ๊ฒ์ด๋ค.
}

async function getBanana(){
    await delay(1000);
    // web API ์์์ ์ฐ๋ฆฌ๊ฐ setTimeout()์์ 2๋ฒ์งธ ์ธ์๋ก ๋ฃ์ 1000ms ๋์ ํ์ด๋จธ๊ฐ ๋์๊ฐ๋ค.
    // 1000ms ์ดํ ํด๋น ์ฝ๋ฐฑ์ call stack์ผ๋ก ๋ณด๋ด์ง์ง ์๊ณ , ๋์  (micro)queue ๋ผ๋ ๊ณต๊ฐ์ผ๋ก ๋ณด๋ด์ง
    // queue์์ ๋๊ธฐํ๋ ๋์ ๋ฆฌํดํ์ง ์์. ๋ฐ๋ฉด์ await์ *ํด๋น ๋ก์ง์ ๋ค ์ฒ๋ฆฌํ๊ณ * 
    // ํฌํจ๋ ๋ง๋ ํจ์๋ฅผ queue์ ๋ณด๋์ ๋ฐ๋ผ ์ผ์ ์ ์ง ์ํด.
    return '๐';
    // ์ฝ๋ฐฑ ํจ์๊ฐ call stack์ ์ถ๊ฐ๋๊ณ  ํธ์ถ๋ ๋ค์ ๊ฐ์ ๋ฆฌํดํ๊ณ  ์คํ์์ ๋น ์ ธ๋์จ๋ค.
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    console.log(applePromise);
    console.log(bananaPromise);
    // pending (๋๊ธฐ) ์์ง ๋ก์ง ์ฒ๋ฆฌ๊ฐ ์๋ฃ๋์ง ์์ ๊ฒฝ์ฐ, ํ๋ก๋ฏธ์ค๋ง ๋ฐํ.
    // ์์ง 1์ด๊ฐ ์ ์ง๋ ์ํ.
    const apple = await applePromise;
    // promise๊ฐ resolve๋์ then()์์ ๋ฐ๋ ๊ทธ๋ฐ ๊ฒฐ๊ณผ๊ฐ์ ๋ง์น ์ผ๋ฐํจ์์ ๋ฆฌํด๊ฐ์ ๋ฐ๋ฏ์ด
    // ์ด๋ ๊ฒ ์ธ์ ์์.
    // applePromise์ *๋ก์ง์ ๋ค ์ฒ๋ฆฌํ๊ณ * ํจ์๋ฅผ ์ผ์ ์ ์ง ์ํจ๋ค. 
    // ์ด ๋ง๋ํจ์ ์์ฒด๋ฅผ queue๋ก ์ด๋์ํด.(๋ง๋ํจ์๋ queue์์ ๋๊ธฐ)
    console.log(apple);
    // fulfilled ๋ก์ง ์ฒ๋ฆฌ๊ฐ ์๋ฃ๋์ด, ๊ฒฐ๊ณผ ๊ฐ์ ๋ฐํํ๋ ๊ฒฝ์ฐ.
    const banana = await bananaPromise;
    console.log(banana);
    console.log(applePromise);
    console.log(bananaPromise);

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
console.log('์คํ ์ค');

// https://kkangdda.tistory.com/77?category=830981 ์ฐธ๊ณ ํ  ๊ฒ.
// async ํจ์๋ ํญ์ return ๊ฐ์ด ํ๋ก๋ฏธ์ค ๊ฐ์ด๋ค.
// await ํ๋ก๋ฏธ์ค ํจ์ ์ด๋ฆ ํ๋ฉด return ๊ฐ์ด ๋์จ๋ค.