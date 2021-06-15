const data = [
  {
    title: "Interstellar",
    year: "2014",
    type: ["Action", "SF"],
    actors: ["M. McConaughey", "A. Hathaway"],
    time: "2:49",
  },
  {
    title: "Black Hawk Down",
    year: "2001",
    type: ["Action", "Guerre"],
    actors: ["J. Hartnett", "E. Bana"],
    time: "2:32",
  },
  {
    title: "Le prestige",
    year: "2006",
    type: ["Mystère", "Drame"],
    actors: ["H. Jackman", "C. Bale"],
    time: "2:10",
  },
];


print('Start #################################################################');

db = db.getSiblingDB('dbMovies');
db.createCollection('movies');
db.movies.insertMany(data);


print('END #################################################################');

