// ==UserScript==
// @name        EF Availability Highlighter
// @namespace   ST
// @description Expert Flyer Highlighter
// @include     https://www.expertflyer.com/air/awardUpgradeResults.do
// @version     1
// @grant       none
// ==/UserScript==

function highlightAvailable() {

  const success = '#daffe0';

  var nodes = document.getElementsByClassName("col colSeats");

  var nodesCount = nodes.length;
  for (let i = 0; i < nodes.length; i++) {
    var availCount = parseInt(nodes[i].textContent);

    if (availCount > 0) {

      // Color entire flight row
      nodes[i].closest('tr.row').style.backgroundColor = success;

      // Color available class
      nodes[i].closest('tr.rowAvailClasses').style.fontWeight = "bold";

    } else if (!availCount) {
      // Color unavailable class
      if (nodes[i].closest('tr.rowAvailClasses')) {
        nodes[i].closest('tr.rowAvailClasses').style.color = "rgba(0,0,0,.5)";
      }
    }
  }
}

highlightAvailable();
