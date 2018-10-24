//src/api.js
const express = require("express");
const router = express.Router();
const player = require("../logic/ticTacToe");

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/playerSwap", "/api/playerSwap/{SYMBOL}"] }
  };
  res.status(200).send(options);
});

router.get("/playerSwap/:symbol", (req, res) => {
	res.status(200).send({symbol: player(req.params.symbol)});
});

module.exports = router;