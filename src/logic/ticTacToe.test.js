// ticTacToe.test.js
const Player = require("./player");
const playerSwap = require("./ticTacToe")

test("Should return the given symbol", () => {
	expect(playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	expect(playerSwap("o")).toBe("x");
});

test("Should show correct player symbol", () => {
	let x = new Player("X");
	expect(x.getSymbol()).toBe("x");
});