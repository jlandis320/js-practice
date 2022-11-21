// * 8kyu

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  //   input is a name
  //   accepts uppercase and lower -- need to convert to upper
  //   isolate charat index0
  //   return string
  return name.toUpperCase().charAt(0) === "R"
    ? name + " plays banjo"
    : name + " does not play banjo";
  //   return name;
}

// *-------------------------------------------------------------------------------------------------------*//
// * 8 kyu
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// * 8 kyu

// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
  //   inputs are strings
  //   output is strings -- player 1 won, player 2 won, or draw
  //   if else if else
    if (p1 === p2){
      return 'Draw!'
    } else if (p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
      }
  };
  // neater solutions included polymorphism

// * 8kyu
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  let emptystring = "";
  let sheep = 1; 
  for (i = 0; i < num; i++) { 
    let count = `${sheep++} sheep...`;
    emptystring = emptystring.concat(count);
  }
  return emptystring;
};

// better solve: 
// var countSheep = function (num){
//   let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;
// }
// resolves 47&48 into one line; resolves 50&51 into one line 

// * 8kyu

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  //   input is an integer, can assume nonnegative
  // need to multiply .5 x time
  //   math.floor to round down? 
  // return an whole number
  //   return Math.round(litres * time) <- Math.round() will accurately round, Math.floor() will round down
    return Math.floor(time * .5)
  }