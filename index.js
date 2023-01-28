let saveLogin = prompt("Створи свій логін");
let savePass = prompt("Створи свій пароль");
let login = prompt("Введи свій логін");
if (login == saveLogin) {
    let password = prompt("Введи свій пароль");
    if (password == savePass) {
        alert("правильний пароль");
        let username = prompt("Напишіть своє ім'я");
        alert("Привіт " + username + "!");
    } else {
        alert("Не правильний пароль");
    }
} else {
    alert("Не правильний логін");
}