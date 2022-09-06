let homeTeam;
let awayTeam;
let homeTeamScore = 0;
let awayTeamScore = 0;
let summary;
let summaryStack = [];

function startMatch() {
    homeTeam = prompt("Please enter the name of home team", "");
    awayTeam = prompt("Please enter the name of away team", "");

    document.getElementById("teamOne").innerHTML = homeTeam;
    document.getElementById("teamTwo").innerHTML = awayTeam;

    document.getElementById("scoreOne").innerHTML = homeTeamScore;
    document.getElementById("scoreTwo").innerHTML = awayTeamScore;

}

function updateScore() {
    homeTeamScore = prompt("Please enter the score for home team", "");
    awayTeamScore = prompt("Please enter the score for away team", "");

    document.getElementById("scoreOne").innerHTML = homeTeamScore;
    document.getElementById("scoreTwo").innerHTML = awayTeamScore;

}

function endMatch() {
    summary = `${homeTeam} ${homeTeamScore} - ${awayTeam} ${awayTeamScore}` + '\n';
    summaryStack.push(summary);
    summaryStack.push('\n');

    document.getElementById("summary").innerHTML = summaryStack;

    homeTeam = '';
    awayTeam = '';
    homeTeamScore = '';
    awayTeamScore = '';

    document.getElementById("teamOne").innerHTML = homeTeam;
    document.getElementById("scoreOne").innerHTML = awayTeam;
    document.getElementById("teamTwo").innerHTML = homeTeamScore;
    document.getElementById("scoreTwo").innerHTML = awayTeamScore;

}
