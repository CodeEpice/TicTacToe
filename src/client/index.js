const TicTacToe = require("../logic/ticTacToe.js");

document.getElementById("myButton").onclick = function () {
        var sym = document.getElementById("symbol").innerHTML;
        console.log(sym);
        fetch("/api/TicTacToe/currentPlayerTurn")
        .then((resp) => resp.json())
        .then((resp) => {
        	console.log(resp); 
        	 document.getElementById("symbol").innerHTML = resp.symbol;
        })
    };