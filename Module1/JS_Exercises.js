//Variables
var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

var dogSound = "woof";
var catSound = "purr";

console.log(petDog, " says ", dogSound);
console.log(petCat, " says ", catSound);

var catSound = "meow";

console.log(petCat, "now says", catSound);

//Operators and data types
var score = 8;
var timeRemaining = 0;
var energy = 10;
console.log("Mid-level skills:", score > 0 && score < 10);
console.log("Game over:", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log(5 + 10);

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
counter -= 2;
console.log(counter);

//Conditional statement
var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension.");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get salary.");
} else if (age < 18) {
  console.log("You get allowance");
} else {
  console.log("The value of the age variable is not numeric.");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do something 1");
    break;
  case "Tuesday":
    console.log("Do something 2");
    break;
  case "Wednesday":
    console.log("Do something 3");
    break;
  case "Thursday":
    console.log("Do something 4");
    break;
  case "Friday":
    console.log("Do something 5");
    break;
  case "Saturday":
    console.log("Do something 6");
    break;
  case "Sunday":
    console.log("Do something 7");
    break;
  default:
    console.log("There is no such day");
}

//Loops
for (i = 1; i < 6; i++) {
  console.log(i);
}
console.log("Counting completed!");

for (i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Countdown finished!");

var counter = 1;
while (counter < 6) {
  console.log(counter);
  counter++;
}
console.log("Counting completed!");

var counter = 5;
while (counter > 0) {
  console.log(counter);
  counter--;
}
console.log("Countdown finished!");

var year = 2018;
while (year < 2023) {
  console.log(year);
  year++;
}

//Conditional and Loops.

for (i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

for (i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
