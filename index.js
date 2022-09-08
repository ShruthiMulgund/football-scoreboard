let homeTeam;
let awayTeam;
let homeTeamScore;
let awayTeamScore;
let summary;
let summaryStack = [];

function startMatch() {
    homeTeam = prompt("Please enter the name of home team", "");
    homeTeam = isAlphabet(homeTeam, "home");

    awayTeam = prompt("Please enter the name of away team", "");
    awayTeam = isAlphabet(awayTeam, "away");

    document.getElementById("teamOne").innerHTML = homeTeam;
    document.getElementById("teamTwo").innerHTML = awayTeam;

    let score;
    score = setScoresToZero();

    document.getElementById("scoreOne").innerHTML = score.home;
    document.getElementById("scoreTwo").innerHTML = score.away;

}

function updateScore() {
    homeTeamScore = prompt("Please enter the score for home team", "");
    homeTeamScore = isNumber(homeTeamScore);

    let tothomeTeamScore = getTotalScore(homeTeamScore);
    console.log("total 1=> ", tothomeTeamScore);

    awayTeamScore = prompt("Please enter the score for away team", "");
    awayTeamScore = isNumber(awayTeamScore);

    let totawayTeamScore = getTotalScore(awayTeamScore);
    console.log("total 2=> ", totawayTeamScore);

    document.getElementById("scoreOne").innerHTML = tothomeTeamScore;
    document.getElementById("scoreTwo").innerHTML = totawayTeamScore;

}

function getTotalScore(score) {
    let homeArr = [];
    homeArr.push(score);

    console.log("arr=> ", score);

    return homeArr.reduce((a, b) => a + b);
}

function setScoresToZero() {
    let team = {
        home: 0,
        away: 0
    }

    return team;
}

function isAlphabet(team, name) {
    team = team.toLowerCase();
    while (!/^[a-z]+$/.test(team)) {
        alert("Invalid input. Please enter name from letters from a-z");
        team = prompt(`Please enter the name for ${name} team`);
    }

    return team;
}

function isNumber(score) {
    while (!/^[0-9]+$/.test(score)) {
        alert("You did not enter a number.");
        score = prompt("Please enter the score for team");
    }

    return score;
}

function endMatch() {
    summary = `${homeTeam} ${homeTeamScore} - ${awayTeam} ${awayTeamScore}`;
    summaryStack.push(summary);

    document.getElementById("summary").innerHTML = summaryStack.join(" <br> ");

    homeTeam = '';
    awayTeam = '';
    homeTeamScore = '';
    awayTeamScore = '';

    document.getElementById("teamOne").innerHTML = homeTeam;
    document.getElementById("scoreOne").innerHTML = awayTeam;
    document.getElementById("teamTwo").innerHTML = homeTeamScore;
    document.getElementById("scoreTwo").innerHTML = awayTeamScore;

}