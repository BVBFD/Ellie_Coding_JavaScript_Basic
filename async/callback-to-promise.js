'use strict';

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
              ) {
                resolve(id);
              } else {
                reject(new Error('not found'));
              }
            }, 2000);
        });
    }

  getRoles(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user === 'ellie') {
              resolve({ name: 'ellie', role: 'admin' });
            } else {
              reject(new Error('no access'));
            }
          }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);

//결국 user등과 같은 매개변수는 그 전 함수에서 리턴해준 값을 받아주는 매개변수에 불과하다. 깊은 의미 두지 말자.