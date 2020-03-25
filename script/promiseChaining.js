function loadJson(url) {
  return fetch(url).then(response => response.json());
}

function loadGitUser(name) {
  return fetch(`https://api.github.com/users/${name}`).then(response =>
    response.json()
  );
}

function showAvatar(githubUser) {
  return new Promise(resolve => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

loadJson('/user.json')
  .then(user => loadGitUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Avatar showtime of ${githubUser.name} is over`));
