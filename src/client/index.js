const _ = require("lodash");
const playerSwap = require("../logic/ticTacToe.js");

function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'there!'], ' ');
	return element;


}
document.body.appendChild(component());

document.getElementById("myButton").onclick = function () {
        var sym = String(document.getElementById("symbol"));
        fetch("/api/playerSwap" + sym)
        .then((resp) => resp.json())
        .then((resp) => {
        	console.log(resp); 
        	sym.innerHTML = resp;
        })
    };
//getElementByID("myButton").onclick = playerSwap(document.getElementByID("symbol"));
