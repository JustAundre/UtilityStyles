# readme.md
## About
This github repository hosts code projects made by [@JustAundre](https://discord.com/channels/@me/532681285961777154) \(Discord\).
You can also find me over on [YouTube](https://www.youtube.com/@JustAundre); however I don't post often.
This repository's purpose is to host the following...

- CSS for...
  - Decluttering websites (including ads)
  - Compacting UI elements
  - Spacing out UI elements
  - Patching visual issues

## Formatting quirks to note
Empty comments in my JavaScript are usually separaters for readability whilst still trying to keep blocks of related code connected \(See example below\)
```js
// Group of relevant code 1
let
xyz1 = 1,
xyz2 = 2;
//
const
abc1 = 3,
abc2 = 4;

// Group of relevant code 2
let sum = x + y + a + b;
```
Seemingly useless scopes (code inbetween 2 curley brackets that do nothing) are there to limit the scope of variables I want to have a limited scope \(See example below\)
```js
{
  let options = ["a", "b", "c",];
  let button = document.querySelector("#button1");
}
let options = ["x", "y", "z",];
```
I add newlines in places where I think reading the code as 1 line would be burdensome even if it's not "neccessary".
```js
// My formatting:
let options = [
  `abc${var1}`,
  `abc${var2}`,
  `abc${var3}`,
  `abc${var4}`,
];

// What I would like to avoid:
let options = [`abc${var1}`, `abc${var2}`, `abc${var3}`, `abc${var4}`,];
```
For functions used in an index.js but which are not declared in the index.js file, please check for it in the Global JS.js file.


## Attributions
- JavaScript learning source & Helpful documentation - [MDN Web Documents - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Discord Declutter "Remove Reply & Reacts to User Statuses" - [Vencord Discord - Message](https://discord.com/channels/1015060230222131221/1028106818368589824/1363041134179516416)
- Discord Patches "Returns "Today at..." in timestamps" - [Vencord Discord - Message](https://discord.com/channels/1015060230222131221/1028106818368589824/1354458308714696816)
- Page icon created by Anton Kalashnyk (SvgRepo) - [Link to icon](https://www.svgrepo.com/svg/408689/page-document-my-page-empty-page)

## Copyright
Copyright © 2025 JustAundre - No rights reserved.
Licensed under the Creatives Commons No Rights Reserved License. You may obtain a copy of the License at: <https://creativecommons.org/share-your-work/public-domain/cc0/>
You are hereby granted a License under the Creatives Commons No Rights Reserved License to use this code.
