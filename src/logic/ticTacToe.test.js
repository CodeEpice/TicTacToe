// ticTacToe.test.js
const TTT = require("./ticTacToe.js");

test("Should return the given symbol, o", () => {
	var game = new TTT();
	expect(game.playerSwap("x")).toBe("o");
});

test("Should return the given symbol, x", () => {
	var game = new TTT();
	expect(game.playerSwap("o")).toBe("x");
});

test("Should return player X score from ticTacToe class", () => {
	var game = new TTT();
	expect(game.playerX.score).toBe(0);
});

test("Should return player X symbol from ticTacToe", () => {
	var game = new TTT();
	expect(game.playerX.symbol).toBe("x");
});

test("Should return the current game state in this instance of ticTacToe", () => {
	var game = new TTT();
	game.grid.setValue(0, "x");
	game.grid.setValue(1, "x");
	game.grid.setValue(2, "x");
	game.winCheck();
	expect(game.gameOver).toBe(true);
});

test("Should return true if box is checked", () => {
	var game = new TTT();
	game.grid.setValue(2, "x");
	expect(game.grid.isChecked(2)).toBe(true);
});

test("Should return false from isChecked function when board is reset", () => {
	var game = new TTT();
	game.grid.setValue(2, "x");
	game.reset();
	expect(game.grid.isChecked(2)).toBe(false);
});

test("Should handle whos turn it is when a move is made", () => {
	var game = new TTT();
	expect(game.turnCount).toBe(1);
	game.turnCount = 3;
	game.move(5);
	expect(game.grid.getValue(5)).toBe("x");
	expect(game.turnCount).toBe(4);
	game.move(2);
	expect(game.grid.getValue(2)).toBe("o");
	expect(game.turnCount).toBe(5);
});

test("Should set the win state and tie state as appropriate", () => {
	var game = new TTT();
	game.move(2);
	game.move(1);
	game.move(4);
	game.move(5);
	game.move(6);
	expect(game.turnCount).toBe(6);
	expect(game.gameOver).toBe(true);
	expect(game.tie).toBe(false);
});