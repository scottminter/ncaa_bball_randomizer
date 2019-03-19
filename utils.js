let utils = {};

utils.getBrackets = function (teams) {
  let brackets = {
    south: getBracket(teams.south),
    east: getBracket(teams.east),
    west: getBracket(teams.west),
    midwest: getBracket(teams.midwest)
  };

  return brackets;
}

utils.getBracketsForRounds = function (teams) {
  let brackets = {
    south: getBracketForRound(teams.south),
    east: getBracketForRound(teams.east),
    west: getBracketForRound(teams.west),
    midwest: getBracketForRound(teams.midwest)
  };

  return brackets;
};

utils.getFinalFourGames = function (teams) {
  let brackets = {
    eastWest: {
      t1: teams.east[0].winner,
      t2: teams.west[0].winner
    },
    southMidwest: {
      t1: teams.south[0].winner,
      t2: teams.midwest[0].winner
    }
  };
  
  return brackets;
};

utils.getChampionshipGame = function (teams) {
  let brackets = {
    t1: teams.eastWest.winner,
    t2: teams.southMidwest.winner
  };
  
  return brackets;
};

module.exports = utils;

function getBracket(divTeams) {
  let bracket = [],
    game = {},
    x = divTeams.length - 1;

  for (let i = 0; i < (divTeams.length / 2); i++) {
    game.higher = divTeams[i];
    game.lower = divTeams[x - i];

    bracket.push(game);

    game = {};
  }

  return bracket;
}

function getBracketForRound(divTeams) {
  let bracket = [],
    game = {},
    x = divTeams.length - 1;

  for (let i = 0; i < (divTeams.length / 2); i++) {
    // game.higher = divTeams[i].winner;
    // game.lower = divTeams[x - i].winner;
    if (divTeams[i].winner === divTeams[i].higher) {
      game.higher = divTeams[i].winner;
      game.lower = divTeams[x - i].winner;
    } else {
      game.higher = divTeams[x - i].winner;
      game.lower = divTeams[i].winner;
    }
    
    bracket.push(game);
    
    game = {};
  }
  
  return bracket;
}
