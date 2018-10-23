// ticTacToe.test.js

const player = require("./ticTacToe")

test("Should return the given symbol", () => {
	expect(player("X")).toBe("Player: X");
});