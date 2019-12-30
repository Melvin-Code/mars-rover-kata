// Rover Object Goes Here

let rover = {
	direction: 'N',
	//"direction" : ["N","E","S","W"]
	position: [0, 0],
};

console.log('Your current direction is: ' + rover.direction);
console.log('Your current position is: ' + rover.position);
console.log('======================');
// ======================
//matrix Creator

function createGrid(columns, rows) {
	var grid = [];
	for (var i = 0; i < columns; i++) {
		grid[i] = new Array(rows);
	}
	return grid;
}

//TEST creating matrix

let myGrid = createGrid(10, 10);

console.log(myGrid);

console.log('======================');

// ======================
let travelLog = [];

// ======================

console.log('======================');
// ======================

function turnLeft() {
	console.log('turnLeft was called!');

	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'N';
			break;
	}
	console.log(rover);
}

function turnRight() {
	console.log('turnRight was called!');
	switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'N';
			break;
	}

	console.log(rover);
}

function turning() {
	switch (turn) {
		case 'left':
			turnLeft();
			break;

		case 'right':
			turnRight();
			break;
	}

	RegisterTravelLogTurn();
}

// ======================
//MOVEMENT

//moveForward

function moveForward() {
	console.log('moveForward was called');

	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] + 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] - 1;
			break;
	}

	oops('forward');

	console.log(rover);
}

//moveBackwards

function moveBackwards() {
	console.log('moveBackwards was called');

	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] - 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] + 1;
			break;
	}

	oops('backwards');

	console.log(rover);
}

// ======================
function oops(movement) {
	if (rover.position[0] < 0 || rover.position[0] >= 10) {
		console.log('Oops! border reach, you cannot move ' + movement);
		rover.position[0] = 0;
	}
	if (rover.position[1] < 0) {
		console.log('Oops! border reach, you cannot move ' + movement);
		rover.position[1] = 0;
	} else {
		RegisterTravelLogMovement();
	}
}

function RegisterTravelLogMovement() {
	travelLog.push(
		'Rover moved Forward, Rovers position is: ' + rover.position
	);
}

function RegisterTravelLogTurn() {
	travelLog.push(
		'Rover turned ' +
			turn +
			', now Rovers direction is: ' +
			rover.direction
	);
}

// ======================

// ======================

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'b':
				moveBackwards();
				break;

			case 'f':
				moveForward();
				break;

			case 'r':
				turn = 'right';
				turning();
				break;

			case 'l':
				turn = 'left';
				turning();
				break;
		}
	}
}

//TEST COMMANDS HERE
console.log('COMMANDS TESTING');

commands('rrfflffb');

console.log('======================');
// ======================
console.log('TRAVEL LOG TEST');

console.log(travelLog);
console.log('======================');

console.log('======================');
// ======================
console.log('COMMANDS TESTING ON GRID');

console.log(rover);

myGrid[rover.position[0]][rover.position[1]] = 'rover';

console.log(myGrid);
