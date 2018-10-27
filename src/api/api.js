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

module.exports = router;