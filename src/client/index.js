const _ = require("lodash");
const playerSwap = require("../logic/ticTacToe.js");

function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'there!'], ' ');
	return element;


}
document.body.appendChild(component());

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
//getElementByID("myButton").onclick = playerSwap(document.getElementByID("symbol"));
