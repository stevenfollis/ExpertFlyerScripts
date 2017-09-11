// ==UserScript==
// @name        EF Availability Highlighter
// @namespace   ST
// @description Expert Flyer Highlighter
// @include     https://www.expertflyer.com/air/awardUpgradeResults.do
// @version     1
// @grant       none
// ==/UserScript==

function highlightAvailable() {
	var nodes = document.getElementsByClassName("col colSeats"); 
	
	var nodesCount = nodes.length;
	for (i=0; i<nodes.length; i++)
	{
		var availCount = parseInt(nodes[i].textContent);
		debugger;
		if (availCount > 0)
		{
			nodes[i].style.backgroundColor="LightGreen";
		}
	}
}

highlightAvailable();