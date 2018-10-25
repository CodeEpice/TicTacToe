// ticTacToe.test.js

const playerSwap = require("./ticTacToe")

test("Should return the given symbol", () => {
	expect(playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	expect(playerSwap("o")).toBe("x");
});