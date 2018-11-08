const Random = require('random');

let firstRound = {};

firstRound.getResults = function getResults (teams) {
  let games = getBrackets(teams);

  games.south = playGames(games.south);
  games.east = playGames(games.east);
  games.west = playGames(games.west);
  games.midwest = playGames(games.midwest);

  return games;
};

function playGames(games) {
  for (i = 0; i < games.length; i++) {
    let totals = getWinTotals();

    while (totals.lowWins === totals.highWins) {
      totals = getWinTotals();
    }

    if (totals.highWins > totals.lowWins) {
      games[i].winner = games[i].higher;
    } else {
      games[i].winner = games[i].lower;
    }
  }

  return games;
}

function getWinTotals() {
  let totals = {
    highWins: 0,
    lowWins: 0
  };

  for (let i = 0; i < 3000; i++) {
    let rnd = Random.int(1, 100);

    if (rnd <= 50) {
      totals.lowWins++;
    } else {
      totals.highWins++;
    }
  }

  return totals;
}

function getBrackets(teams) {
  let brackets = {
    south: getBracket(teams.south),
    east: getBracket(teams.east),
    west: getBracket(teams.west),
    midwest: getBracket(teams.midwest)
  };

  return brackets;
}

function getBracket(divTeams) {
  let bracket = [],
    game = {};

  for (let i = 0; i < (divTeams.length / 2); i++) {
    game.higher = divTeams[i];
    game.lower = divTeams[15 - i];

    bracket.push(game);

    game = {};
  }

  return bracket;
}

module.exports = firstRound;
