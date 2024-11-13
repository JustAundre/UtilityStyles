// Define "now" as a new "Date()" function
const now = new Date();

// Randomized wording for greetings
  const rngAdjective = [
    'Nice',
    'Fair',
    'Lovely',
    'Beautiful',
    'Starry',
    'Wonderful',
    'Amazing',
  ][Math.round(Math.random() * 6)];
  const rngNotQuestion = [
    '!',
    '.',
  ][Math.round(Math.random())]
  const rngMiniGreeting = [
    `hello${rngNotQuestion}`,
    `greetings${rngNotQuestion}`,
    `good ${timeOfDay}${rngNotQuestion}`,
    `ello'${rngNotQuestion}`,
    `welcome${rngNotQuestion}`,
    'how are you?',
    'fairing well?',
  ][Math.round(Math.random() * 7)];
  const rngMiniGreetingCapitalized = [
    `Hello${rngNotQuestion}`,
    `Greetings${rngNotQuestion}`,
    `Good ${timeOfDay}${rngNotQuestion}`,
    `Ello'${rngNotQuestion}`,
    `Welcome${rngNotQuestion}`,
    'How are you?',
    'Fairing well?',
  ][Math.round(Math.random() * 7)];
  const rngDrink = [
    'coffee',
    'tea',
    'warm milk',
    'hot chocolate',
    'matcha',
  ][Math.round(Math.random() * 4)];
  let rngUserNick = [
    'programmer',
    'coder',
    'stranger',
    'user',
    'guest',
    'old friend',
    'friend',
    'traveler',
    'visitor',
  ][Math.round(Math.random() * 8)];

// If user's date difference from UTC date is greater than 2, force user's nickname to "time traveler"
const userDate = Number(`${now.getFullYear()}${(now.getMonth() + 1)}${now.getDate()}`);
const utcDate = Number(`${now.getUTCFullYear()}${now.getUTCMonth() + 1}${now.getUTCDate()}`);
if ((utcDate - userDate) > 2 || (utcDate - userDate) < -2) { rngUserNick = "time traveler"; }
else { console.log('User has not altered their system time majorly'); }

// Finds the user's generalized time of day
const userHours = now.getHours();
let timeOfDay;
if (userHours <= 12) { timeOfDay = 'morning'; }
  else { if (userHours <= 17 && userHours > 12) { timeOfDay = 'afternoon'; }
    else { timeOfDay = 'evening'; }
}

function rngGreeting() {
  // Selects a random greeting based on the appropriate time of day
    if (timeOfDay === "morning") {
      selectedGreeting = [
        greetingAllOne,
        greetingAllTwo,
        greetingMorningOne,
      ][Math.round(Math.random() * 2)];
    }
    if (timeOfDay === "afternoon") {
      selectedGreeting = [
        greetingAllOne,
        greetingAfternoonOne,
      ][Math.round(Math.random())];
    }
    if (timeOfDay === "evening") {
      selectedGreeting = [
        greetingAllOne,
        greetingEveningOne,
      ][Math.round(Math.random())];
    }
  const greetingElement = document.querySelector(`#greetingElementId`);
  greetingElement.innerText = selectedGreeting;
}

// Greetings
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