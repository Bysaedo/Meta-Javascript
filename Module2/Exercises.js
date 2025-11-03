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
(favCar.color = "blue"), (favCar.convertible = "true");
console.log(favCar);
