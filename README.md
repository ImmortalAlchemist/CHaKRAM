/*

### CHaKRAM v1
This is a bare HTML game controlled with your mouse.
Run through all 10 enemies in as few moves as possible.

#### Bugs
* [0] Destroy enemies on collision
* [0] Center collision point in circle

#### Features
* [0] Auto movement with background color changing
* [0] Sound effects on move, hit, multi-hit, win
* [0] Randomization validation
* [0] Randomization is seed-based, daily seed
* [0] Local storage high score

### AI Disclosure & Outside Assets
Google Gemini was used to sanity check code and debug after extensive searching, but not to generate features wholesale.
Things AI helped me figure out:
 * Silly mistakes (id vs class)
 * Absolute positioning vs relative positioning (I think I still don't understand how to properly use it)
 * Why my SVG object wasn't scaled correctly
 * Debugging a lot more than I'd imagined near the deadline

I did use custom line detection code for collision:
https://codereview.stackexchange.com/a/192500

#### Tips (mostly for myself)
* ctrl + / to comment things in or out
* "!" to put in the boilerplate code
* put the script element at the bottom of the page
* class is ".", id is "#"

*/
