let result = document.getElementById("result");
// массив со строками для ответа
let arr = ["Да" ,"Нет","Может быть","Наверное","Не думаю, но возможно","Лучше не рассказывать", "Это факт",  "Такого точно не будет"]
let circle = document.getElementById("circle")
let random_num = 0;
let txt = "";
function Rename(){
    // удаляет класс анимации тряски у круга
    circle.classList.remove("animation");
     // берет рандомное число по кол-ву в массиве
    random_num = Math.floor(Math.random()*arr.length);
    // присваивает к текстовой переменной значение числа по массиву
    txt = arr[random_num];
    // присваивает текстовую переменную к параграфу
    result.textContent = txt;
    // Добавляет класс анимации тряски у круга
    requestAnimationFrame(()=> {
        circle.classList.add("animation");
    })
}