// Define "now" as a new "Date()" function
const now = new Date();
// Pre-define a variable so it can be used outside of a if/then statement or function
let timeOfDay;
let selectedGreeting;
// Gets the user's hour of the day
const userHours = now.getHours();

// Get the user's day of the week in number form (1-7), zero index it (0-6), and then covert it into an actual day name
const userWeekDay = [
  `Saturday`,
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
  `Monday`,
  `Tuesday`][now.getDay() + 1];
console.log(userWeekDay);

// Finds the user's generalized time of day
if (userHours <= 12) { timeOfDay = 'morning'; }
  else { if (userHours <= 17 && userHours > 12) { timeOfDay = 'afternoon'; }
    else { timeOfDay = 'evening'; }
}
function rngGreeting() {
  if (timeOfDay === "morning") { selectedGreeting = [
    greetingAllOne,
    greetingAllTwo,
    greetingMorningOne,
  ][Math.round(Math.random() * 2)];
}

  if (timeOfDay === "afternoon") { selectedGreeting = [
    greetingAllOne,
    greetingAfternoonOne,
  ][Math.round(Math.random())];
}

  if (timeOfDay === "evening") { selectedGreeting = [
    greetingAllOne,
    greetingEveningOne,
  ][Math.round(Math.random())];
}

  console.log(`Selected greeting: "${selectedGreeting}"`);
  const greetingElement = document.querySelector(`#greetingElementId`);
  greetingElement.innerText = selectedGreeting;
}

const rngAdjective = [
  `Nice`,
  `Fair`,
  `Lovely`,
  `Beautiful`,
  `Starry`,
  `Wonderful`,
  `Amazing`,
]
[Math.round(Math.random() * 6)];

const rngNotQuestion = [
  `!`,
  `.`,
][Math.round(Math.random())]

const rngMiniGreeting = [
  `hello${rngNotQuestion}`,
  `greetings${rngNotQuestion}`,
  `good ${timeOfDay}${rngNotQuestion}`,
  `ello'${rngNotQuestion}`,
  `how are you?`,
  `fairing well?`,
  `welcome${rngNotQuestion}`,
][Math.round(Math.random() * 7)];

const rngMiniGreetingCapitalized = [
  `Hello${rngNotQuestion}`,
  `Greetings${rngNotQuestion}`,
  `Good ${timeOfDay}${rngNotQuestion}`,
  `Ello'${rngNotQuestion}`,
  `How are you?`,
  `Fairing well?`,
  `Welcome${rngNotQuestion}`,
][Math.round(Math.random() * 7)];

let rngUserNick = [
  `programmer`,
  `coder`,
  `stranger`,
  `user`,
  `guest`,
  `old friend`,
  `friend`,
  `traveler`,
  `visitor`,
][Math.round(Math.random() * 8)];

const rngDrink = [
  `coffee`,
  `tea`,
  `warm milk`,
  `hot chocolate`,
  `matcha`,
][Math.round(Math.random() * 4)];

const userDate = Number(`${now.getFullYear()}${(now.getMonth() + 1)}${now.getDate()}`);
const utcDate = Number(`${now.getUTCFullYear()}${now.getUTCMonth() + 1}${now.getUTCDate()}`);
if ((utcDate - userDate) > 2 || (utcDate - userDate) < -2) { rngUserNick = "time traveler"; }
else { console.log('User has not altered their system time majorly'); }

// Possible any time of day
const greetingAllOne = `Good ${timeOfDay}, ${rngUserNick}${rngNotQuestion}`;
console.log(greetingAllOne);
const greetingAllTwo = `${rngMiniGreetingCapitalized} Has the internet gotten any better?`;
console.log(greetingAllTwo);

// Only possible in the morning (before or equal to mid-day)
const greetingMorningOne = `Mmm.. oh${rngNotQuestion} Care for a cup of ${rngDrink}, ${rngUserNick}?`;
console.log(greetingMorningOne);

// Only possible during afternoons (past mid-day and before or equal to 5 PM)
const greetingAfternoonOne = `Oh, ${rngMiniGreeting} Care to look at the sunset with me?`;
console.log(greetingAfternoonOne);

// Only possible in the evening (past 5 PM)
const greetingEveningOne = `${rngAdjective} night, isn't it, ${rngUserNick}?`;
console.log(greetingEveningOne);
const greetingEveningTwo = `${rngMiniGreetingCapitalized} Would you like to come star gaze?`;
console.log(greetingEveningTwo);

// Call the function to roll a random greeting
rngGreeting();