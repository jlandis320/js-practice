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

// * 8kyu
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){

  let emptystring = ''
  let sheep = 1
  for (i = 0; i < num; i++){
    let count = `${sheep++} sheep...`
    emptystring = emptystring.concat(count)
    }
      return emptystring
}