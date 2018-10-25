// ticTacToe.test.js
const player = require("./player");
const playerSwap = require("./ticTacToe");
const board = require("./board");
const ticTacToe = require("./ticTacToe");

let b = new board(3,3);
let x = new player("X");
let t = new ticTacToe();

test("Should return the given symbol", () => {
	expect(t.playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	expect(t.playerSwap("o")).toBe("x");
});

test("Should show correct player symbol", () => {
	expect(x.getSymbol()).toBe("x");
});

test("Should return score as 1", () => {
	x.incrementScore();
	expect(x.getScore()).toBe(1);
});

test("Should return true if value could be set", () => {
	expect(b.setValue(4,"x")).toBe(true);
});

test("Should return true if value could be set", () => {
	expect(b.getValue(4)).toBe("x");
});

test("Should return player X symbol fromo ticTacToe", () =>{
	expect(t.playerX.getSymbol()).toBe("x");
})
