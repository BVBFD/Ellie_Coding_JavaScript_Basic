  'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,  // 밑에 user에 대해 고찰하면 function onSuccess(user)
  user => {    // 성공해서 사용자를 받아왔을 때, 처리해야하는 코드 블록과 사용자를 받아오지 못했을 때 실행해야하는 코드, id를 받아와서 onSuccess 함수를 여기서 정의한다고 보면됨.
    userStorage.getRoles(  // 사용자가 로그인 되었다면 이 로그인된 정보를 가지고 유저스토리지의 겟롤을 통해 사용자의 역할을 가지고 와야함.
      user,  // 사용자의 user를 이용해서
      userWithRole => {   // userWithRole 매개변수로 데이터가 들어오면
        alert(  // 이걸 다시 처리하는 콜백함수 하나와
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {   // 다시 에러가 발생하면 출력하는 콜백함수
      console.log(error);
    }
  );
},
  error => { // 에러가 발생하면 콘솔에 출력
    console.log(error);
}
);