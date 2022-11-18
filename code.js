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

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
