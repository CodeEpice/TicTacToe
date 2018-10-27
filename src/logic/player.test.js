// player.test.js
const Player = require("./player");

test("Should show correct player symbol", () => {
	var p = new Player("X");
	expect(p.symbol).toBe("x");
});

test("Should show that the Player constructor works", () => {
	var p = new Player("X");
	expect(p.symbol).toBe("x");
	expect(p.score).toBe(0);
});

test("Should return score as 1", () => {
	var p = new Player("X");
	p.incrementScore();
	expect(p.score).toBe(1);
});