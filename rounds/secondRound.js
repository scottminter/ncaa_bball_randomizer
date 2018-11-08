const Random = require('random');

let secondRound = {};

secondRound.getResults = function getResults (firstRoundResults) {
console.log(firstRoundResults);  
  getSecondRoundBrackets(firstRoundResults);
}

function getSecondRoundBrackets(results) {
  let bracket = {
    south: [],
    east: [],
    west: [],
    midwest: []
  };
}

function getDivisionalBracket(divResults) {

  return [];
}

module.exports = secondRound;