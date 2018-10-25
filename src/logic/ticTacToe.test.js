// ticTacToe.test.js

const playerSwap = require("./ticTacToe");
const board = require("./board");

let x = new board(3,3);

test("Should return the given symbol", () => {
	expect(playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	expect(playerSwap("o")).toBe("x");
});

test("Should return true if value could be set", () => {
	expect(x.setValue(4,"x")).toBe(true);
});

test("Should return true if value could be set", () => {
	expect(x.getValue(4)).toBe("x");
});
