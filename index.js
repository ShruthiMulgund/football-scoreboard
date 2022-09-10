let homeTeam;
let awayTeam;

let homeTeamScore;
let awayTeamScore;

let summary;
let summaryStack = [];

let arr1 = [];
let arr2 = [];

let totalHomeTeamScore;
let totalAwayTeamScore;

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

    awayTeamScore = prompt("Please enter the score for away team", "");
    awayTeamScore = isNumber(awayTeamScore);

    document.getElementById("scoreOne").innerHTML = homeTeamScore;
    document.getElementById("scoreTwo").innerHTML = awayTeamScore;

    let home = parseInt(homeTeamScore, 10);
    let away = parseInt(awayTeamScore, 10);

    arr1.push(home);
    arr2.push(away);

    totalHomeTeamScore = totalScore(arr1);
    totalAwayTeamScore = totalScore(arr2);

    displayScore("scoreOne", totalHomeTeamScore);
    displayScore("scoreTwo", totalAwayTeamScore);

}

function totalScore(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function displayScore(teamName, tothomeTeamScore) {
    document.getElementById(`${teamName}`).innerHTML = tothomeTeamScore;
}

function getTotalScore(score) {
    return score.reduce((a, b) => a + b);
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
        alert("Invalid input. Please enter name from letters between a-z");
        team = prompt(`Please enter the name for ${name} team`);
    }

    return team;
}

function isNumber(score) {
    while (!/^[0-9]+$/.test(score)) {
        alert("Invalid input. Please enter a number between 0 & 9.");
        score = prompt("Please enter the score for team");
    }

    return score;
}

function endMatch() {
    summary = `${homeTeam} ${totalHomeTeamScore} - ${awayTeam} ${totalAwayTeamScore}`;
    summaryStack.push(summary);

    let latestFirst = summaryStack.reverse();

    document.getElementById("summary").innerHTML = latestFirst.join(" <br> ");

    arr1 = [];
    arr2 = [];

    document.getElementById("teamOne").innerHTML = '';
    document.getElementById("scoreOne").innerHTML = '';
    document.getElementById("teamTwo").innerHTML = '';
    document.getElementById("scoreTwo").innerHTML = '';

}