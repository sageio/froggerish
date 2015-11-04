// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Set Enemy x & y values to equal values passed in receptively.
    this.x=x;
    this.y=y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy x location is less than canvas length:
        // add 200 to x value multiplied by supplied time delta(dt)
    // else:
        // set enemy x value to -100(reset to other side of screen)
    if(this.x<505){
    this.x+=(200*dt);
    }
    else{
    this.x=-100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player class which the user controls
var Player=function(x,y){

    // The image/sprite for our player, this uses
    // a helper Udacity provided to easily load images
    this.sprite = 'images/char-boy.png';
    // Set Player x & y values to equal values passed in receptively.
    this.x=x;
    this.y=y;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
