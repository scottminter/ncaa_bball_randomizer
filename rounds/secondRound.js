const Random = require('random');

let secondRound = {};

secondRound.getResults = function getResults (firstRoundResults) {
  getTeams(firstRoundResults);
}

function getTeams(results) {
  let teams = {
    south: getDivisonalTeams(results.south),
    east: getDivisonalTeams(results.east),
    west: getDivisonalTeams(results.west),
    midwest: getDivisonalTeams(results.midwest)
  };

  console.log(JSON.stringify(teams, null, 2));
}

function getDivisonalTeams(results) {
  let teams = [];

  for (var i = 0; i < results.length; i++) {
    teams.push(results[i].winner);
  }

  return teams;
}

module.exports = secondRound;