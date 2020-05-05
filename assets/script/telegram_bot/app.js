//  https://api.telegram.org/bot1072508861:AAF9RNP-t4I732s5gZiI0q9_EX6GuY6YOls/getUpdates

//  https://api.telegram.org/bot1072508861:AAF9RNP-t4I732s5gZiI0q9_EX6GuY6YOls/sendMessage?chat_id=-352607528&text=Hello

document.querySelector('#button').onclick = function() {
  let message = document.querySelector('.message').value;
  let xhttp = new XMLHttpRequest();
  const _id = `-352607528`;
  const token = `1072508861:AAF9RNP-t4I732s5gZiI0q9_EX6GuY6YOls`;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${_id}&text=`;
  xhttp.open('GET', url + message, true);
  xhttp.send();
};
