//создаем переменные и присваем id элементов
let score1 = document.getElementById("team1");

let score2 = document.getElementById("team2");

let win = document.getElementById("res");

//переменные для хранения рандномного числа
let s1;
let s2;

//функция для вывода рандомных чисел
function get_score() {

    //подключение библиотеки
    s1 = Math.floor(Math.random()*10);
    s2 = Math.floor(Math.random()*10);

    //присваем вывод числа с помощью метода
    score1.textContent = s1;
    score2.textContent = s2;
}

//функция для вывода победителя
function win_btn() {
    if (s1 > s2) {
        score1.style.color = "red"; //изменяем цвет с помощью свойства
        score2.style.color = "white";
        win.textContent = "Победила 1 команда"; //присваем вывод с помощью свойства
    }
    if (s1 < s2) {
        score2.style.color = "red";
        score1.style.color = "white";
        win.textContent = "Победила 2 команда";
    }
    else {
        score1.style.color = "white";
        score2.style.color = "white";
        win.textContent = "Ничья";
    }
}