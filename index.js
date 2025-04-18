// Randomized wording and sentence starters for greetings
const greetingWords = {}
greetingWords.synonymsNice = ["nice", "fair", "lovely", "beautiful", "starry", "wonderful", "amazing", "great",][rng(8)];
greetingWords.synonymsLook = ["stare", "look", "gaze", "ponder", "awe",][rng(5)];
greetingWords.synonymsNight = ["evening", "night", "nightfall", "dusk",][rng(4)];
greetingWords.drink = ["coffee", "green tea", "tea", "warm milk", "hot chocolate", "hot coco", "matcha",][rng(7)];
greetingWords.firstBlanket = ["heated", "weighted",][rng()];
greetingWords.secondBlanket = (greetingWords.firstBlanket == "heated") ? "weighted" : "heated";
greetingWords.punctNonQuestion = ["!", ".",][rng()];
greetingWords.minorGreeting = [`hello${greetingWords.punctNonQuestion}`, `greetings${greetingWords.punctNonQuestion}`, `good ${user.generalTime}${greetingWords.punctNonQuestion}`, `'ello${greetingWords.punctNonQuestion}`, `welcome${greetingWords.punctNonQuestion}`, `nice weather, ${user.name}${greetingWords.punctNonQuestion}`, `ooo! how are you?`, "how are you?", "fairing well?",][rng(9)];
greetingWords.questionEndWithUsername = ["", `, ${user.name}`][rng()] + "?";
greetingWords.sentenceEndWithUsername = ["", `, ${user.name}`][rng()] + greetingWords.punctNonQuestion;

// Defines the directories for all the possible greetings
const g = {
  all: {},
  morning: {},
  afternoon: {},
  evening: {},
}
//
// Possible any time of day
g.all.a1 = `<span>good ${user.generalTime}${greetingWords.sentenceEndWithUsername}</span>`;
g.all.a2 = `<span>${greetingWords.minorGreeting} has the ${["web", "internet",][rng()]} ${[`gotten ${["", "any"][rng()]} better`, `improved`,][rng()]}${greetingWords.questionEndWithUsername}</span>`;
g.all.a3 = `<span>hm?- oh${greetingWords.punctNonQuestion} going ${["for", "on",][rng()]} ${(user.generalTime == "morning") ? "a" : "an"} ${user.generalTime} walk${greetingWords.questionEndWithUsername}</span>`;
//
// Only possible in the morning
g.morning.a1 = `<span>mmm.. oh${greetingWords.punctNonQuestion} care for a cup of ${greetingWords.drink}${greetingWords.questionEndWithUsername}</span>`;
//
// Only possible during afternoons
g.afternoon.a1 = `<span>oh, ${greetingWords.minorGreeting} care to ${greetingWords.synonymsLook} at the sunset with me?</span>`;
//
// Only possible in the evening
g.evening.a1 = `<span>${greetingWords.synonymsNice} ${greetingWords.synonymsNight}, isn't it${["", `, ${user.name}`,][rng()]}?</span>`;
g.evening.a2 = `<span>${greetingWords.minorGreeting} would you like to come ${["star gaze", `gaze at the ${["night", "skies", "stars", "night sky", "universe",][rng()]}`,][rng()]}?</span>`;
g.evening.a3 = `<span>${greetingWords.synonymsNice} ${greetingWords.synonymsNight} for a ${greetingWords.firstBlanket} blanket, ${user.name}${greetingWords.punctNonQuestion}</span>${["", `<br><span>( Or maybe a ${greetingWords.secondBlanket} blanket... )</span>`,][rng()]}`;
g.evening.a4 = `<span>feeling tired yet, ${user.name}?</span>`;
g.evening.a5 = `<span>hm?- oh${greetingWords.punctNonQuestion} going ${["for", "on",][rng()]} an evening walk, ${user.name}?</span>`;

// Finds and sentence-casifies the selected greeting before setting it
document.querySelector("#greetingText").innerHTML = [...Object.values(g.all), ...Object.values(g[user.generalTime])][rng()].toLowerCase().replace(/([!?.\(\)]-? |(^|<span>)'?|>)\w/g, (capitalizeLetter) => capitalizeLetter.toUpperCase());

// RNG 0-.5, translate to a percentage which will be used to determine the significance of the brighter color in the background
function colorPos() {
  root.setAttribute("style", `--colorPos: ${rng("", true) / 2 * 100}%;`);
  setTimeout(colorPos, 5000);
}
colorPos()