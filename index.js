const Teams = require('./teams/teams.json');
const firstRound = require('./rounds/firstRound');
const secondRound = require('./rounds/secondRound');


let firstRoundResults = firstRound.getResults(Teams);
let secondRoundResults = secondRound.getResults(firstRoundResults);


