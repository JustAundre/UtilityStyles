// Define "now" as a new "Date()" function
  const now = new Date();
//

// Finds the user's generalized time of day
  const userHour = now.getHours();
  let timeGeneralized;
  switch (true) {
    case userHour <= 12: timeGeneralized = 'morning';
    case userHour <= 17 && userHour > 12: timeGeneralized = 'afternoon';
    case userHour >= 17: timeGeneralized = 'evening';
  }
//

// Randomized wording for greetings
  let userNick = [
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
  let capitalizedUserNick = [
    'Programmer',
    'Coder',
    'Stranger',
    'User',
    'Guest',
    'Old friend',
    'Friend',
    'Traveler',
    'Visitor',
  ][Math.round(Math.random() * 8)];
  const randomAdjective = [
    'Nice',
    'Fair',
    'Lovely',
    'Beautiful',
    'Starry',
    'Wonderful',
    'Amazing',
  ][Math.round(Math.random() * 6)];
  const randomNotQuestion = [
    '!',
    '.',
  ][Math.round(Math.random())]
  const randomDrink = [
    'coffee',
    'tea',
    'warm milk',
    'hot chocolate',
    'matcha',
  ][Math.round(Math.random() * 4)];
  const synonymsOfLook = [
    'stare',
    'look',
    'gaze',
    'ponder',
    'awe',
  ][Math.round(Math.random() * 4)]
  const randomMiniGreeting = [
    `hello${randomNotQuestion}`,
    `greetings${randomNotQuestion}`,
    `good ${timeGeneralized}${randomNotQuestion}`,
    `'ello${randomNotQuestion}`,
    `welcome${randomNotQuestion}`,
    'how are you?',
    'fairing well?',
    `nice weather, ${userNick}${randomNotQuestion}`,
  ][Math.round(Math.random() * 6)];
  const randomMiniGreetingCapitalized = [
    `Hello${randomNotQuestion}`,
    `Greetings${randomNotQuestion}`,
    `Good ${timeGeneralized}${randomNotQuestion}`,
    `'Ello${randomNotQuestion}`,
    `Welcome${randomNotQuestion}`,
    'How are you?',
    'Fairing well?',
    `Nice weather, ${userNick}${randomNotQuestion}`,
  ][Math.round(Math.random() * 6)];
//
// If user's date difference from UTC date is greater than 2, force user's nickname to "time traveler" and sets isTimeTraveler to "true"
  const userDate = Number(`${now.getFullYear()}${(now.getMonth() + 1)}${now.getDate()}`);
  let isTimeTraveler;
  const utcDate = Number(`${now.getUTCFullYear()}${now.getUTCMonth() + 1}${now.getUTCDate()}`);
  if ((utcDate - userDate) > 2 || (utcDate - userDate) < -2) {
    userNick = 'time traveler';
    isTimeTraveler = true;
  } else 
  { isTimeTraveler = false; }
//

function randomGreeting() {
  // Selects a random greeting based on the appropriate time of day
  switch (timeGeneralized) {
    case 'morning': selectedGreeting = [ greetingAllOne, greetingAllTwo, greetingMorningOne, ][Math.round(Math.random() * 2)];
    case 'afternoon': selectedGreeting = [ greetingAllOne, greetingAfternoonOne, ][Math.round(Math.random())];
    case 'evening': selectedGreeting = [ greetingAllOne, greetingEveningOne, ][Math.round(Math.random())];
  }
  //
  const greetingElement = document.querySelector(`.greetingText`);
  greetingElement.innerText = ` ${selectedGreeting} `;
}

// Possible greetings
  // Possible any time of day
    const greetingAllOne = `Good ${timeGeneralized}, ${userNick}${randomNotQuestion}`;
    const greetingAllTwo = `${randomMiniGreetingCapitalized} Has the internet gotten any better?`;
    const greetingAllThree = `Hm?- Oh${randomNotQuestion} Going for a ${timeGeneralized} walk, ${userNick}?`;
  //
  // Only possible in the morning (before or equal to mid-day)
    const greetingMorningOne = `Mmm.. oh${randomNotQuestion} Care for a cup of ${randomDrink}, ${userNick}?`;
  //
  // Only possible during afternoons (past mid-day and before or equal to 5 PM)
    const greetingAfternoonOne = `Oh, ${randomMiniGreeting} Care to ${synonymsOfLook} at the sunset with me?`;
  //
  // Only possible in the evening (past 5 PM)
    const greetingEveningOne = `${randomAdjective} night, isn't it. ${capitalizedUserNick}?`;
    const greetingEveningTwo = `${randomMiniGreetingCapitalized} Would you like to come star gaze?`;
  //
//

// Debug logging
  console.log(`
    %c greetingAllOne = "${greetingAllOne}"\n
    %c greetingAllTwo = "${greetingAllTwo}"\n
    %c greetingAllThree = "${greetingAllThree}"\n
    %c greetingMorningOne = "${greetingMorningOne}"\n
    %c greetingEveningOne = "${greetingEveningOne}"\n
    %c greetingEveningTwo = "${greetingEveningTwo}"\n
    %c userNick = "${userNick}"\n
    %c timeGeneralized = "${timeGeneralized}"\n
    %c isTimeTraveler = ${isTimeTraveler}\n`,
    `color: lime;`,
    `color: rgb(155, 255, 155);`,
    'color: lime;',
    `color: rgb(155, 255, 155);`,
    'color: lime;',
    `color: rgb(155, 255, 155);`,
    'color: lime;',
    `color: rgb(155, 255, 155);`,
    'color: lime;', 
  );
//

// Call the function to roll a random greeting
  randomGreeting();
//