// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x = -102;
	this.y = randomYPosition();
	this.speed = randomSpeed();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x + this.speed * dt;
	if(this.x > 600){
		this.x = -102;
		this.y = randomYPosition();
		this.speed = randomSpeed();
	}
	//handle collision
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
	this.sprite = 'images/char-boy.png';
	this.x = 200;
	this.y = 380;
};

Player.prototype.update = function(){
	if(this.y < 1){
		//the player made it
		this.y = 380;
		this.x = 200;
	}
	
	if(this.y > 380){
		this.y = 380;
	}
	
	if(this.x < -2){
		this.x = -2;
	}
	
	if(this.x > 402){
		this.x = 402;
	}
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = obj => {
	switch(obj) {
    case 'up':
		player.y -= 83;
		console.log(player.y);
        break;
    case 'down':
		player.y += 83;
        break;
	case 'left':
		player.x -= 101;
        break;
	case 'right':
		player.x += 101;
        break;
    default:
        console.log(obj);
}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = []; 
var set = [], numEnemies = 3;

for(var i = 0; i < numEnemies; i++){
	allEnemies[i] = new Enemy;
	allEnemies[i].speed = randomSpeed(); 
	allEnemies[i].y= randomYPosition();
}

//allEnemies = set;
console.log(allEnemies);
// Place the player object in a variable called player
var player = new Player;



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


//https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


//get random speed
function randomSpeed(){
	return Math.random() * (400 - 100) + 100; 
}

//get a random y position for enemy
function randomYPosition(){
	positions = [48, 131, 214];
	const position = getRandom(positions, 1);
	return position;
}
