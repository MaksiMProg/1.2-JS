//1)
let a = 4;
b = 0;

let c = ++a;
let d = b++;
// a-5,b-1,c-5,d-0


//2)
let e = 3;
let f = 2;

let x = 1 + (e += 2);
let у = 1 + (f *= 2);
//e-5,f-4,x-6,y-5

//3)
//first
let year = prompt('Будем выводить чемпионов Англии по футболу, в зависимости от года (с 2011 по 2022)');
// if (year < 2011) {
//     console.log('Статистика ещё не велась');
// } else if (year == 2022) {
//     console.log("Cезон ещё идёт!");
// } else if (year > 2022) {
//     console.log("Все лучшее впереди!");
// } else if (year == 2015 || year == 2017) {
//     console.log('Челси');
// } else if (year == 2012 || year==2014 || year==2018 || year==2019 || year==2021) {
//     console.log('Манчестер Сити');
// } else if (year == 2011 || year == 2013) {
//     console.log('Манчестер Юнайтед');
// } else if (year == 2020) {
//     console.log('Ливерпуль');
// } else if (year == 2016) {
//     console.log('Лестер Сити');
// } else {
//     console.log('Значение введено не корректно');
// }
//second
let message = year < 2011 ? console.log(' "Статистика еще не велась"') :
    year == 2022 ? console.log('Cезон ещё идёт!') :
    year > 2022 ? console.log('Все лучшее впереди!') :
    year == 2015 || year == 2017 ? console.log('Челси') :
    year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021 ? console.log('Манчестер Сити') :
    year == 2011 || year == 2013 ? console.log('Манчестер Юнайтед') :
    year == 2020 ? console.log('Ливерпуль') :
    year == 2016 ? console.log('Лестер Сити') :
    console.log("Некорректно");




//4)
let login = prompt('Введите логин');
if (login == 'Админ') {
    let password = prompt('Введите пароль');
    if (password == 'Я главный') {
        console.log('Здравствуйте!');
    } else if (password === null) {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }
} else if (login === null) {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
}

//5)
for (let i = 7; i <= 15; i++) {
    if (i == 12) {
        console.log('12.Цикл прерван');
        break;
    } else if (i % 2 != 0) {
        console.log(i);
    }

}

//6)

let j = 0;
while (j < 5) {
    console.log(`number ${j}!`);
    j++;
}