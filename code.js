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

// *8kyu
// Description:

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  if (current === 'green') return 'yellow'
  if (current === 'yellow') return 'red'
  if (current === 'red') return 'green'
}


// another solve: 
// function updateLight(current) {
//   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }

//* 8kyu
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((accumulator, sheep) => sheep ? accumulator += 1 : accumulator , 0)
}

// neater solve: 
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

//* 7kyu 

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(Number.isFinite);
  // filter returns an array 
  // Number returns numbers inthe array 
  // isFinite evaluates 0 as truthy -- 0 is a falsy value to simply using Number wasn't returning 0
    // could also use .isInteger
}

// * 7kyu
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  return Array.from(str).filter(el => el === "a" || el === "e" || el === "i" || el === "o" || el === "u").length
}

// could also use a regex and .search() 
// I liked this better solve: 
function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

// * 7kyu

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  let arr = str.split('').splice(str.length - ending.length).join("")
  return arr === ending ? true : false
}

function solution(str, ending){
  str.endsWith(ending)
}
// girl. first of all -- there is a string method .endsWith(). 


// * 8kyu
function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}

// better solve: 
function makeNegative(num) {
  return num < 0 ? num : -num;
}
// see how you don't need to multiply by -1? just slap a negative on the front of num and it works


function abbrevName(name){
  let arr = name.toUpperCase().split(" ")
  
  let init = []
  
  arr.forEach(n => init.push((n[0])))
  
  return init = init.join('.')
}

// * 7 kyu
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
// congrats! this solution was also the top solution and I started learning about regex for real
  // /[pattern]/flags
  // if the pattern is written as [^pattern], this returns all the opposite letters. 

  // * 7 kyu
  var isSquare = function(n){
    return  Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false
  }
  // this was so fucking hard for me. didn't know about Math.sqrt() 
  // better solution:
  var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }
  // Number.isInteger checks if a number is an integer -- built in rather than what I did
  var isSquare = function(n){
    for (var x = 0; x <= n; x++) {
      if (n === 0) {
        return true;
      } else if (n / x === x) {
        return true;
      }
    }
    return false;
  }
  // how to solve without builtin methods ^

  function squareDigits(num){
    const arr = Array.from(num.toString())
    const squares = []
    arr.forEach(digit => squares.push(digit * digit))
    let solution = parseInt(squares.join(''))
    return solution
  }