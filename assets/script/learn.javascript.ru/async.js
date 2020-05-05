// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     let result = await response.json();
//     return result;
//   }
//   throw new Error(response.status);
// }

// loadJson('no-such-user.json').catch(alert);

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let result = await response.json();
//     return result;
//   }
//   throw new HttpError(response);
// }

// async function demoGithubUser() {
//   let user;

//   while (true) {
//     let name = prompt('Введите логин?', 'iliakan');

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break;
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//       } else {
//         throw err;
//       }
//     }
//   }
//   alert(`Полное имя: ${user.name}`);
//   return user;
// }

// demoGithubUser();

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  return async function() {
    let result = await wait();
    return alert(result);
  };
}

f();
