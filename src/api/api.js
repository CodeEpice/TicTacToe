//src/api.js
const express = require("express");
const router = express.Router();
const TicTacToe = require("../logic/ticTacToe");

var game = new TicTacToe();

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/currentPlayerTurn", "/api/currentPlayerTurn"] }
  };
  res.status(200).send(options);
});

router.get("/ticTacToe/currentPlayerTurn", (req, res) => {
	res.status(200).send({ symbol: game.currentPlayerTurn() });
});

router.get("/ticTacToe/move/:index", (req, res) => {
	res.status(200).send({ symbol: game.move(req.params.index) });
});

router.get("/ticTacToe/gameState", (req, res) => {
	res.status(200).send({ gameOver: game.gameOver, tie: game.tie });
});

router.get("/ticTacToe/reset", (req, res) => {
	game.reset();
	res.status(200).send({ gameOver: game.gameOver, tie: game.tie, turns: game.turnCount });
});

router.get("/ticTacToe", (req, res) => {
	res.status(200).send({ xscore: game.playerX.score, oscore: game.playerO.score });
});

module.exports = router;