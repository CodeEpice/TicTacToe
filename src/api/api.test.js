//src/api.test.js
const request = require("supertest");
const app = require("../app");

describe("OPTIONS /api", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).options("/api");
    expect(res.status).toBe(200);
  });
});

describe("GET /api", () => {
  it("should return 405 status code and an error message", async () => {
    const res = await request(app).get("/api");
    expect(res.status).toBe(405);
    expect(res.body).toHaveProperty("error");
  });
});

/*
describe("GET /api/player/{SYMBOL}", () => {
  it("should return an object with the player symbol", async () => {
    const res = await request(app).get("/api/ticTacToe/playerSwap/O");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("symbol");
  });
});
*/