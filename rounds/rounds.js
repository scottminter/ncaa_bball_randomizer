const Random = require('random');

let firstRound = {};

firstRound.getResults = function getResults (games) {
  games.south = playGames(games.south);
  games.east = playGames(games.east);
  games.west = playGames(games.west);
  games.midwest = playGames(games.midwest);

  return games;
};

function playGames(games) {
  for (i = 0; i < games.length; i++) {
    let totals = getWinTotals(i);

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

function getWinTotals(j) {
  let totals = {
    highWins: 0,
    lowWins: 0
  };

  for (let i = 0; i < 100; i++) {
    let rnd = Random.int(1, 100);

    if (rnd >= 50) {
      totals.highWins++;
    } else {
      totals.lowWins++;
    }
  }

  return totals;
}

module.exports = firstRound;
