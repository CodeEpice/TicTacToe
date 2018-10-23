//src/api.test.js
const request = require("supertest");
const api = require("./api");

describe("GET /player/:symbol endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/player/_");
		expect(res.status).toBe(200);
	});
 
	it("should return the player symbol in a object", async () => {
 		const res = await request(api).get("/player/X");
 		expect(res.body.player).toBe("Player: X");
 	});
});
