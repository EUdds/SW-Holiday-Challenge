let snowflakes = []; // array to hold snowflake objects
let HOLIDAY_SONG; // Global Variable for our song

function preload() { // Called before setup, only should be used to load data
  HOLIDAY_SONG = loadSound('./sample.mp3');
}

function setup() { // Inital Function called once
  HOLIDAY_SONG.playMode('restart')
  HOLIDAY_SONG.play(); // play(startTime, rate, amp, cueStart, duration)
  createCanvas(400, 600);
  fill(240);
}

function draw() { // Loop function called 60 times a second
  background('red'); // Pick a color for the background (Rainbow color strings are accepted e.g. red, green, blue, etc)
  let t = frameCount / 60; // update time

  drawGround() // Fill in this function below

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new Snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

/**
 * @description Draws the ground
 */
function drawGround() {
  // Heplful function fill(Red, Green, Blue)
  // Helpful function rect(x, y, width, height)

}
