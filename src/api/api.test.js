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

describe("GET /api/ticTacToe/move/{SYMBOL}", () => {
  it("should return x", async () => {
    const res = await request(app).get("/api/ticTacToe/move/2");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("symbol");
  });
});

describe("GET /api/ticTacToe/gameState", () => {
  it("should return game state json object", async () => {
    const res = await request(app).get("/api/ticTacToe/gameState");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("gameOver");
    expect(res.body).toHaveProperty("tie");
  });
});

describe("GET /api/ticTacToe/reset", () => {
  it("should return game state json object", async () => {
    const res = await request(app).get("/api/ticTacToe/reset");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("gameOver");
    expect(res.body.tie).toBe(false);
    expect(res.body.turns).toBe(1);
  });
});

describe("GET /api/ticTacToe", () => {
  it("should return scores for both players", async () => {
    const res = await request(app).get("/api/ticTacToe");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("xscore");
    expect(res.body).toHaveProperty("oscore");
  });
});

