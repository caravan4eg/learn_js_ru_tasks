let userName = prompt("Вы кто ? (admin)");
let userPasswod;
alert(userName);

if (userName == "admin") {
  userPasswod = prompt("Введите пароль");
  if (userPasswod=='boss'){
    alert('Hello boss')
  } else if (userPasswod == null || userPasswod == '') {
    alert("Отменено");
  } else {
    alert('Неверный пароль')
  }
} else if (userName == null || userName == '') {
  alert("Отменено");
} else {
  alert('Я вас не знаю')
}

