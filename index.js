const Teams = require('./teams/teams.json');
const utils = require('./utils');
const round = require('./rounds/rounds');
const finalFour = require('./rounds/finalFour');
const championship = require('./rounds/championship');

const games = utils.getBrackets(Teams);
// console.log(games);
let firstRoundResults = round.getResults(games);
console.log(firstRoundResults);

const games2ndRound = utils.getBracketsForRounds(firstRoundResults);
// // console.log(games2ndRound);
let secondRoundResults = round.getResults(games2ndRound); //secondRound.getResults(firstRoundResults);
console.log(secondRoundResults);

const games3rdRound = utils.getBracketsForRounds(secondRoundResults);
// // console.log(games3rdRound);
const thirdRoundResults = round.getResults(games3rdRound);
console.log(thirdRoundResults);

const games4thRound = utils.getBracketsForRounds(thirdRoundResults);
const fourthRoundResults = round.getResults(games4thRound);
console.log(fourthRoundResults);

// const games5thRound = utils.getBracketsForRounds(fourthRoundResults);
// const fifthRoundResults = round.getResults(games5thRound);
// console.log(fifthRoundResults);

const finalFourGames = utils.getFinalFourGames(fourthRoundResults);
// // console.log(finalFourGames);
const finalFourResults = finalFour.getResults(finalFourGames);
console.log(finalFourResults);

const championshipGame = utils.getChampionshipGame(finalFourResults);
// console.log(championshipGame);
const championshipResults = championship.getResults(championshipGame);
console.log(championshipResults);

console.log('Winner...', championshipResults.winner);

function printer(thing) {
  console.log(JSON.stringify(thing, null, 4));
}
