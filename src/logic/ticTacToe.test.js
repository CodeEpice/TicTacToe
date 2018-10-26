// ticTacToe.test.js
const TTT = require('./ticTacToe.js');

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