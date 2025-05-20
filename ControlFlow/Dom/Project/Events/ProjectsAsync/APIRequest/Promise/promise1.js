// Promise One

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task is Complete');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('Promise consumed');
});

// Promise Two

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Async 2 resolved');
});

// Promise Three

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'chai', email: 'ashish' });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise Four

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Ashish', password: '123' });
    } else {
      reject('ERROR: Something Went Wrong');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
const promiseFive=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true
    if(!error)
    {
      resolve({username:"javascript",password:"802312"})
    }
    else {
      reject('ERROR:JS went wrong')
    }
  },1000)
});
//Async wait
async function consumepromiseFive(){
  const response=await promiseFive
  console.log(respose);
}