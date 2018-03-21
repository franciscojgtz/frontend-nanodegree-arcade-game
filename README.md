frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


==============================
Grow with Google Project
==============================

Structure:
index.html -> Basic HTML file with links to CSS and JavaScript files.

css (directory)
 style.css -> CSS file in which we center our elements: body{text-align:center;}

imgages (directory)
	images needed to draw the background:
		grass-block.png
		stone-block.png
		water-block.png
	main character:
		char-boy.png
	enemy:
		enemy-bug.png

note: there are more images that could be used in the event we add more features such as collecting gems.

js (directory)
	resources.js -> This is simply an image loading utility. We don't need to change any of the code.

	engine.js -> This file provides the game loop functionality (update entities and render), draws the initial game board on the screen, and then calls the update and render methods on your player and enemy objects (defined in your app.js). Canvas is used to display the elements. We don't need to change any of the code unless we want to add more characters.

	app.js -> This is where we are going to add the game's functionality. Two classes are needed: Enemy Class and Player Class. We also need a event listner to listen for the users input (arrow up, arrow down, arrow left, arrow right).

	Enemy Class:

	Defining the class using a class expression.
	const Enemy = class { };// ES-6 Syntax

	properties:
		sprite -> assigned to the enemy-bug.png to diplay the enemy
		x -> position in the x axis 
		y -> position in the y axis
		speed -> speed of the enemy (it changes)
		width -> width of the image (101 pixels).

	methods:
		update(dt) -> Update the enemy's position, required method for game Parameter: dt, a time delta between ticks
		render() -> Draw the enemy on the screen, required method for game. This is given to us and don't need to modify it.
		checkCollsion() -> checks for a collision between the user and the enemy

	Player Class:

	Defining the class using a class expression.
	const Player = class { };// ES-6 Syntax

	properties:
		sprite -> assigned to the char-boy.png to diplay the enemy
		width -> width of the image (101 pixels).
		score -> score of the player

		withing our constructor we will call a method called resetPlayer() to bring our player to the initial position.

	methods:
		handleInput(key) -> handles the user input and moves the player on the screen.
		update() -> update the player position and make sure it doesn't go outside of the rendering box
		render() -> Draw the player on the screen, required method for game
		resetPlayer() -> Bring player to original position
		raiseScore() -> Raise the score

	event listener:
		// This listens for key presses and sends the keys to your
		// Player.handleInput() method. You don't need to modify this.
		document.addEventListener('keyup', e => { });

	helper functions:
	 	randomSpeed() -> get a random speed (could be added to be a method for the Enemy Class)

		randomYPosition() -> get a random y position for enemy  (could be added to be a method for the Enemy Class)

		getRandom(arr, n) -> this function takes an array and a number of items you want to return

	Instantiate our Player
		const player = new Player;//global object

	Instantiate Enemies
		const allEnemies = [];//array to hold our enemies
		const numEnemies = 3;// this is the number of enemies we want displayed on our screen

		used a for loop to instantiate our enemies, set a random speed and a random y positon for each enemy
