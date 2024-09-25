"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/


let albom1 ={
    title: "TITLE_1",
    artist: "ARTIST_1",
    year: 1000
}
let albom2 ={
    title: "TITLE_2",
    artist: "ARTIST_2",
    year: 2000
}
let albom3 ={
    title: "TITLE_3",
    artist: "ARTIST_3",
    year: 3000
}

let musicCollection = [albom1,albom2,albom3]
for (const element of musicCollection) {
    console.log(element.title + "-" + element.artist+" " + '"'+element.year+'"')
}