// Randomized wording and sentence starters for greetings
const greetingWords = {}
options = ["nice", "fair", "lovely", "beautiful", "starry", "wonderful", "amazing", "great",];
greetingWords.synonymsNice = options[rng(options)];
//
options = ["stare", "look", "gaze", "ponder", "awe",];
greetingWords.synonymsLook = options[rng(options)];
//
options = ["evening", "night", "nightfall", "dusk",];
greetingWords.synonymsNight = options[rng(options)];
//
options = ["coffee", "green tea", "tea", "warm milk", "hot chocolate", "hot coco", "matcha",];
greetingWords.drink = options[rng(options)];
//
greetingWords.firstBlanket = ["heated", "weighted",][rng()];
greetingWords.secondBlanket = (greetingWords.firstBlanket == "heated") ? "weighted" : "heated";
greetingWords.punctNonQuestion = ["!", ".",][rng()];
options = [
  `hello${greetingWords.punctNonQuestion}`,
  `greetings${greetingWords.punctNonQuestion}`,
  `good ${user.generalTime}${greetingWords.punctNonQuestion}`,
  `'ello${greetingWords.punctNonQuestion}`,
  `welcome${greetingWords.punctNonQuestion}`,
  `nice weather, ${user.name}${greetingWords.punctNonQuestion}`,
  `ooo! how are you?`,
  "how are you?",
  "fairing well?",
];
greetingWords.minorGreeting = options[rng(options)];
greetingWords.questionEndWithUsername = ["", `, ${user.name}`][rng()] + "?";
greetingWords.sentenceEndWithUsername = ["", `, ${user.name}`][rng()] + `${greetingWords.punctNonQuestion}`;

// Defines the directories for all the possible greetings
const g = {
  all: {},
  morning: {},
  afternoon: {},
  evening: {},
}
// Possible any time of day
g.all.a1 = `<span>good ${user.generalTime}${greetingWords.sentenceEndWithUsername}</span>`;
g.all.a2 = `<span>${greetingWords.minorGreeting} has the ${[
  "web",
  "internet",
][rng()]} ${[
  `gotten ${["", "any"][rng()]} better`,
  `improved`,
][rng()]}${greetingWords.questionEndWithUsername}</span>`;
g.all.a3 = `<span>hm?- oh${greetingWords.punctNonQuestion} going ${[
  "for",
  "on",
][rng()]} ${(user.generalTime == "morning") ? "a" : "an"} ${user.generalTime} walk${greetingWords.questionEndWithUsername}</span>`;
//
// Only possible in the morning
g.morning.a1 = `<span>mmm.. oh${greetingWords.punctNonQuestion} care for a cup of ${greetingWords.drink}${greetingWords.questionEndWithUsername}</span>`;
//
// Only possible during afternoons
g.afternoon.a1 = `<span>oh, ${greetingWords.minorGreeting} care to ${greetingWords.synonymsLook} at the sunset with me?</span>`;
//
// Only possible in the evening
g.evening.a1 = `<span>${greetingWords.synonymsNice} ${greetingWords.synonymsNight}, isn't it${["", `, ${user.name}`][rng()]}?</span>`;
g.evening.a2 = `<span>${greetingWords.minorGreeting} would you like to come star gaze?</span>`;
g.evening.a3 = `
  <span>${greetingWords.synonymsNice} ${greetingWords.synonymsNight} for a ${greetingWords.firstBlanket} blanket, ${user.name}${greetingWords.punctNonQuestion}</span>
  ${["", `<span>( Or maybe a ${greetingWords.secondBlanket} blanket... )</span>`,][rng()]}
`;
g.evening.a4 = `<span>ready for bed, are we, ${user.name}?</span>`;
g.evening.a5 = `<span>feeling tired yet, ${user.name}?</span>`;
g.evening.a6 = `<span>hm?- oh${greetingWords.punctNonQuestion} going ${["for", "on",][rng()]} an evening walk, ${user.name}?</span>`;

// Selects a random greeting based on the appropriate time of day and displays it to the respective element
options = [...Object.values(g.all), ...Object.values(g[user.generalTime])]
// Sets the selected, sentence-casified greeting as the greeting displayed on the page
document.querySelector("#greetingText").innerHTML = 
  options[rng(options)]. // Chooses a random valid greeting
  toLowerCase().replace(/([!?.\(\)]-? |(^|<span>)'?|>)\w/g, // Custom logic/regex to select all characters that should be capitalized
  (capitalizeLetter) => capitalizeLetter.toUpperCase()) // Actually capitalizes the selected letters
;