const gen__btn = document.querySelector("#gen__btn");
const gen__solution = document.querySelector("#gen__solution");

let firstLetterMale = ["анхитбл", "понос", "курсед", "сифилизный", "антипопадаки", "кислота", "скитовый", "неверлуз", "агрессивный", "катастрофический", "пердящий", "пенящий", "сдержанный", "красный", "модный", "ответственный", "экономический", "фармацевтический", "спинной", "космический", "тайный", "качественный", "властный", "лошадиный", "иностранный", "молниеносный", "воздушный", "жгучий", "крутой", "силиконовый", "скрытый","Алгебра","Озеро Титикака","Виктор","АсидТеч","Параша","ZXC","Англо-русский словарь","Dictionary","Pencil","Pudge","бетовая бета","Сру в рот","брейн дед","черный","негр","андрей тарков","Зиктор ультра"];
let firstLetterFemale = ["рукоблядскийкомар", "говноочко", "шалашовка", "зиктор", "бодрая", "дрейн", "мамашу чек", "опасная", "улётная", "индукционная", "шоколадный","Пуку-кака","Многочлен","без скитовый","1х1 луз","анти-аим билдер","Дефолт","ну проебал ичо","ну без скита ичо","неверлуз маркет","бумер","сын","Кислотап","бодибилдер кислый","Зига"];
let secondLetterMale = [".yaw", "cord", ".yaw", "99% OFF .cord", "99% OFF .yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", "пору.yaw", ".yaw", "асидтеч", ".yaw", ".yaw", ".yaw", "cord", "cord", "alpha", "alpha", "beta", "beta", "beta"];
let secondLetterFemale = [".yaw", "cord", ".yaw", "99% OFF .cord", "99% OFF .yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", ".yaw", "пору.yaw", ".yaw", "асидтеч", ".yaw", ".yaw", ".yaw", "cord", "cord", "alpha", "alpha", "beta", "beta", "beta"];
let uniqueNames = ["сын говна.yaw", "мамкуебал.yaw", "доширак", "печень соуфифа", "сломанные позвонки.nl", "ипотекa cord", "соуфиф пупс анти аим"];

let allItemsLenght = firstLetterMale.length + firstLetterFemale.length + uniqueNames.length;
let maleChance = Math.floor(firstLetterMale.length / allItemsLenght * 100);
let femaleChance = Math.floor(firstLetterFemale.length / allItemsLenght * 100);
let uniqueChance = Math.floor(uniqueNames.length / allItemsLenght * 100);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

gen__btn.addEventListener("click", function() {
    let answer;
    let randNum = getRandomInt(100);
    if (randNum < maleChance) 
        answer = firstLetterMale[getRandomInt(firstLetterMale.length)] + " " + secondLetterMale[getRandomInt(secondLetterMale.length)];
    else if (randNum < maleChance + femaleChance)
        answer = firstLetterFemale[getRandomInt(firstLetterFemale.length)] + " " + secondLetterFemale[getRandomInt(secondLetterFemale.length)];
    else
        answer = uniqueNames[getRandomInt(uniqueNames.length)]
    gen__solution.classList.remove("invis");
    gen__solution.textContent = "Ваш корднейм: " + answer;
});
