"use strict";

let personalMovieDB = {
   count: '',
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

let numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', "");
personalMovieDB.count = +numberOfFilms;

for (let i = 0; i < 2; i++) {

   let a = prompt('один из последних просмотренных фильмов?', ""),
      b = prompt('на сколько оцените его?');

   if (a == null || a == "" || a.length > 50 || b == null || b == "") {
      i--;
   } else {
      personalMovieDB.movies[a] = +b;
   }
}


if (personalMovieDB.count < 10) {
   alert('Просотренно, доволно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   alert('вы класический зритель');
} else if (personalMovieDB.count >= 30) {
   alert('вы киноМан');
} else {
   alert('произошла ошибка');
}



// let i = 0;
// do {
//    let a = prompt('один из последних просмотренных фильмов?', ""),
//       b = prompt('на сколько оцените его?');

//    i++;

//    if (a == null || a == "" || a.length > 50 || b == null || b == "") {
//       i--;
//    } else {
//       personalMovieDB.movies[a] = +b;
//    }
// } while (i < 2);

// let i = 0;
// while (i < 2) {
//    let a = prompt('один из последних просмотренных фильмов?', ""),
//       b = prompt('на сколько оцените его?');

//    i++;
//    if (a == null || a == "" || a.length > 50 || b == null || b == "") {
//       i--;
//    } else {
//       personalMovieDB.movies[a] = +b;

//    }
// }