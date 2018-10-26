// ticTacToe.test.js
const TTT = require('./ticTacToe.js');

test("Should return the given symbol", () => {
	var game = new TTT();
	expect(game.playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	var game = new TTT();
	expect(game.playerSwap("o")).toBe("x");
});

test("Should return player X symbol from ticTacToe", () => {
	var game = new TTT();
	expect(game.playerX.score).not.toBe(undefined);
});

