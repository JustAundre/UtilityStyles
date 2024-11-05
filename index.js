const now = new Date();
const userWeekDay = ["Monday", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][now.getDay() - 1];
console.log(userWeekDay);
let timeOfDay;
const userHours = now.getHours();
if (userHours <= 12) {
  timeOfDay = "morning";
}
else {
  if (userHours <= 17 && userHours > 12) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
}

let selectedGreeting;
function rngGreeting() {
  if (timeOfDay === "morning") {
    selectedGreeting = [greetingAllOne, greetingMorningOne][Math.round(Math.random())];
  }
  if (timeOfDay === "afternoon") {
    selectedGreeting = [greetingAllOne, greetingAfternoonOne][Math.round(Math.random())]
  }
  if (timeOfDay === "evening") {
    selectedGreeting = [greetingAllOne, greetingEveningOne][Math.round(Math.random())]
  }
  console.log('Selected greeting "' + selectedGreeting + '"')
  const greetingElement = document.querySelector("#greetingElementId");
  greetingElement.innerHTML = selectedGreeting;
}

const rngAdjective = ["Nice", "Fair", "Lovely", "Beautiful", "Starry", "Wonderful", "Amazing"][Math.round(Math.random() * 6)];
const rngMiniGreeting = ["hello", "greetings", "good afternoon", "good day", "ello'", "how are you", "fairing well"][Math.round(Math.random() * 6)];
const rngPunctuation = ["!","?"][Math.round(Math.random())];
const rngPunctuation2 = ["!","."][Math.round(Math.random())];
const rngUserNick = ["time traveler", "programmer", "coder", "stranger", "Netlify user", "user", "guest", "old friend", "friend"][Math.round(Math.random() * 7 + 1)];

// Possible any time of day
const greetingAllOne = "Good " + timeOfDay + ", " + rngUserNick + rngPunctuation2;
console.log(greetingAllOne)

// Only possible in the morning (before or equal to mid-day)
const greetingMorningOne = "Mmm.. oh" + rngPunctuation + " Care for a cup of tea, " + rngUserNick + "?";
console.log(greetingMorningOne)

// Only possible at night (past 5 PM)
const greetingAfternoonOne = rngAdjective + " night, isn't it, " + rngUserNick + "?";
console.log(greetingAfternoonOne)

// Only possible during afternoons (past mid-day and before or equal to 5 PM)
const greetingEveningOne = "Oh, " + rngMiniGreeting + rngPunctuation + " Care to look at the sunset with me?";
console.log(greetingEveningOne)
rngGreeting();