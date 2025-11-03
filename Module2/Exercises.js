//Functions
function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");

//Arrays and objects
var clothes = [];
clothes.push("hat");
clothes.push("pants");
clothes.push("shirt");
clothes.push("shoes");
clothes.push("socks");
clothes.pop();
clothes.push("jacket");
console.log(clothes[2]);

var favCar = {};
(favCar.color = "blue"), (favCar.convertible = true);
console.log(favCar);

//Error prevention
function addTwoNums(a, b) {
  try {
    if (typeof a != Number) {
      throw TypeError;
      console.log("The first argument is not a number");
    } else if (typeof b != Number) {
      throw TypeError;
      console.log("The second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");

//Defensive programming
function letterFinder2(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function");
  }
}
letterFinder2(2, 3);
letterFinder2("cat", "a");
