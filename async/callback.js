'use strict';

console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');

function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
        ) {
        onSuccess(id); 
        // 속시원하게 매개변수로 출력하는거라 생각하자. 
        // 그렇게 생각하는게 속 편함.
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userstorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userstorage.loginUser(
  id,
  password,
  user => {
    userstorage.getRoles(
      user,
      userWithRoles => {
        alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);