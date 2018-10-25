import css from  './mystyle.css';
const playerSwap = require("../logic/ticTacToe.js");

document.getElementById("myButton").onclick = function () {
    var sym = document.getElementById("symbol").innerHTML;
    console.log(sym);
    fetch("/api/playerSwap/" + sym)
    .then((resp) => resp.json())
    .then((resp) => {
    	console.log(resp); 
    	 document.getElementById("symbol").innerHTML = resp.symbol;
    })
};
