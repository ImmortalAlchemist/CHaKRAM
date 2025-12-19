/*

### CHaKRAM v1.1.1
This is a bare HTML game that made without using the HTML canvas, it's controlled with your mouse.
Run through all 10 enemies in as few moves as possible.

### Todo

#### Bugs
* [0] Enemies aren't destroyed on collision
* [0] Collision point drifts from the center (SVG object isn't scaled correctly?)

#### Features
* [0] Sound effects on move, hit, multi-hit, win
* [0] Auto movement with background color changing
* [0] Randomization validation //no enemies inside each other or on title

#### Possible Features
* [0] Seed-based randomization, daily seed
* [0] Local storage high score
* [0] Track time?

#### Bad Practice
* [2] Use of deprecated traits
 * [1] Element.hspace & vspace  //could probably do without, might change to CSS left and top
 * [1] Background.bgcolor       //might not be able to manipulate another way?


### AI Disclosure & Outside Assets
Google Gemini was used to sanity check code and debug after extensive searching elsewhere,
but not to generate features wholesale or tweak code directly.
Things AI helped me figure out:
 * Silly mistakes (id vs class)
 * Absolute positioning vs relative positioning (I think I still don't understand how to properly use it)
 * Why my SVG object wasn't scaled correctly
 * Debugging a lot more than I'd imagined near the end

I did use custom line detection code for collision:
https://codereview.stackexchange.com/a/192500

#### HTML Tips (mostly for myself)
* ctrl + / to comment things in or out
* "!" to put in the boilerplate code
* put the script element at the bottom of the page
* class is ".", id is "#"

*/
