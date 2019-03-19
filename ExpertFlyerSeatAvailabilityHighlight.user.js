// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.expertflyer.com/air/awardUpgradeResults.do
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set variables
    const success = '#daffe0';
    const nodes = document.getElementsByClassName("col colSeats");
    const nodesCount = nodes.length;

    // Loop through results
    for (let i = 0; i < nodes.length; i++) {
      
      // Parse node value
      let availCount = parseInt(nodes[i].textContent);
  
      // Check if there are seats available
      if (availCount > 0) {
        // More than 0 seats are available

        // Color entire flight row
        nodes[i].closest('tr.row').style.backgroundColor = success;
  
        // Color available class
        nodes[i].closest('tr.rowAvailClasses').style.fontWeight = "bold";
  
      } else if (availCount <= 0 || !availCount) {
        // Less than 0 seats are available or this is text ex. "No"

        // Color unavailable class
        if (nodes[i].closest('tr.rowAvailClasses')) {
          nodes[i].closest('tr.rowAvailClasses').style.color = "rgba(0,0,0,.5)";
        }

      }
    }

})();
