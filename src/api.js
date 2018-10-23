//src/api.js
const express = require("express");
const app = express();
const player = require("./ticTacToe");

app.get("/player/:symbol", (req, res) => {
	res.status(200).send({ player: player(req.params.symbol) });
});

module.exports = app;