const Random = require('random');

let firstRound = {};

firstRound.getResults = function getResults(games) {
  games.winner = playGame(games);

  return games;
};

function playGame(games) {
  let totals = getWinTotals();

  while (totals.lowWins === totals.highWins) {
    totals = getWinTotals();
  }

  if (totals.highWins > totals.lowWins) {
    return games.t1;
  } else {
    return games.t2;
  }
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

module.exports = firstRound;
