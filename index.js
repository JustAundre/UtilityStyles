// Define "now" as a new "Date()" function
const now = new Date();

// Get the user's day of the week in number form (1-7), zero index it (0-6), and then covert it into an actual day name
const userWeekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][now.getDay() - 1];
console.log(userWeekDay); // Logs it, used for debugging

// Pre-define a variable so it can be used outside of the if/then/else statement
let timeOfDay;

// Gets the user's hour of the day
const userHours = now.getHours();

// If the user's time of day in hours is less than or equal to mid-day, set the timeOfDay to morning
if (userHours <= 12) {
  timeOfDay = "morning";
}

/* If the user's time of day in hours is less than or equal to 17 (5 PM) and also greater than mid day,
set the timeOfDay to afternoon, otherwise, set the timeOfDay to evening. (past 5 PM, but before 12 AM) */
if (userHours <= 17 && userHours > 12) {
  timeOfDay = "afternoon";
} else {
  timeOfDay = "evening";
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