function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: 'Black, White',
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: 'Turquoise, Purple',
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// REFACTORED CODE
function homeTeam() {
    return gameObject()['home'];
}
function awayTeam() {
    return gameObject()['away'];
}
function players() {
    return { ...homeTeam()['players'], ...awayTeam()['players'] };
}
function numPointsScored(playerName) {
    return players()[playerName].points;
}
function shoeSize(playerName) {
    return players()[playerName].shoe;
}
function teams() {
    return Object.values(gameObject());
}
function teamColors(teamName) {
    return teams().find((item) => item.teamName === teamName).colors;
}
function teamNames() {
    // teams().forEach((item) => console.log(item.teamName));
    return teams().map((item) => item.teamName);
}
function playerNumbers() {
    return Object.entries(players()).map((item) => item[1].number);
}
function playerStats(playerName) {
    return players()[playerName];
}
function bigShoeRebounds() {
    return Object.entries(players()).filter(
        (item) =>
            item[1].shoe ===
            Math.max(...Object.entries(players()).map((item) => item[1].shoe))
    )[0][1].rebounds;
}
function mostPointsScored() {
    return Object.entries(players()).filter(
        (item) =>
            item[1].points ===
            Math.max(...Object.entries(players()).map((item) => item[1].points))
    )[0][0];
}
function playerWithLongestName() {
    return Object.keys(players())
        .filter(
            (item) =>
                item.length ===
                Math.max(...Object.keys(players()).map((item) => item.length))
        )
        .join('');
}
function doesLongNameStealATon() {
    return (
        players()[playerWithLongestName()].steals ===
        Math.max(...Object.entries(players()).map((item) => item[1].steals))
    );
}
/* ORIGINAL CODE
function numPointsScored(playerName) {
    const game = gameObject();
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    if (playerName === playerNames) {
                        const playerStats = playerDetails[playerName];
                        for (const stat in playerStats) {
                            if (stat === 'points') {
                                return playerStats[stat];
                            }
                        }
                    }
                }
            }
        }
    }
}
function shoeSize(playerName) {
    const game = gameObject();
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    if (playerName === playerNames) {
                        const playerStats = playerDetails[playerNames];
                        for (let stat in playerStats) {
                            if (stat === 'shoe') {
                                return playerStats[stat];
                            }
                        }
                    }
                }
            }
        }
    }
}
function teamColors(teamName) {
    const game = gameObject();
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'teamName' && teamName === team[teamDetails]) {
                return team['colors'];
            }
        }
    }
}
function teamNames() {
    const game = gameObject();
    const teamNames = [];
    for (let teams in game) {
        teamNames.push(game[teams]['teamName']);
    }
    return teamNames;
}
function playerNumbers(teamName) {
    const game = gameObject();
    for (let teams in game) {
        const team = game[teams]; // returns home and away
        for (let teamDetails in team) {
            const teamNames = team[teamDetails]; // returns teamName
            if (teamName === teamNames) {
                const playerNumbers = [];
                for (let playerNames in team['players']) {
                    const stats = team['players'][playerNames];
                    playerNumbers.push(stats.number);
                }
                return playerNumbers;
            }
        }
    }
}
function playerStats(playerName) {
    const game = gameObject();
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    if (playerName === playerNames) {
                        const playerStats = playerDetails[playerNames];
                        return playerStats;
                    }
                }
            }
        }
    }
}
function bigShoeRebounds() {
    const game = gameObject();
    const shoeSizes = [];
    const bigShoePlayersRebounds = [];
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    const playerStats = playerDetails[playerNames];
                    for (let stat in playerStats) {
                        if (stat === 'shoe') {
                            shoeSizes.push(playerStats[stat]);
                            bigShoePlayersRebounds.push(
                                playerStats['rebounds']
                            );
                        }
                    }
                }
            }
        }
    }
    const max = Math.max(...shoeSizes);
    const index = shoeSizes.indexOf(max);
    const bigShoePlayerRebounds = bigShoePlayersRebounds[index];
    return bigShoePlayerRebounds;
}
function mostPointsScored() {
    const game = gameObject();
    const mostPoints = [];
    const mostPointsPlayers = [];
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    const playerStats = playerDetails[playerNames];
                    for (let stat in playerStats) {
                        if (stat === 'points') {
                            mostPoints.push(playerStats[stat]);
                            mostPointsPlayers.push(playerNames);
                        }
                    }
                }
            }
        }
    }
    const max = Math.max(...mostPoints);
    const index = mostPoints.indexOf(max);
    const mostPointsPlayer = mostPointsPlayers[index];
    return mostPointsPlayer;
}
function winningTeam() {
    const game = gameObject();
    const pointTotals = [];
    const opponents = [];

    function sumPoints(playerDetails) {
        let pointsSum = 0;
        for (let playerNames in playerDetails) {
            const playerStats = playerDetails[playerNames];
            for (let stat in playerStats) {
                if (stat === 'points') {
                    pointsSum += playerStats[stat];
                }
            }
        }
        return pointsSum;
    }

    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players' && teams === 'away') {
                const playerDetails = team[teamDetails];
                opponents.push(team['teamName']);
                pointTotals.push(sumPoints(playerDetails));
            }
            if (teamDetails === 'players' && teams === 'home') {
                const playerDetails = team[teamDetails];
                opponents.push(team['teamName']);
                pointTotals.push(sumPoints(playerDetails));
            }
        }
    }
    const max = Math.max(...pointTotals);
    const index = pointTotals.indexOf(max);
    const winner = opponents[index];
    return winner;
}
function playerWithLongestName() {
    const game = gameObject();
    const charsInNames = [];
    const names = [];
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    names.push(playerNames);
                    charsInNames.push(playerNames.length);
                }
            }
        }
    }
    const max = Math.max(...charsInNames);
    const index = charsInNames.indexOf(max);
    const playerWithLongestName = names[index];
    return playerWithLongestName;
}
function doesLongNameStealATon() {
    const game = gameObject();
    const names = [];
    const steals = [];
    for (let teams in game) {
        const team = game[teams];
        for (let teamDetails in team) {
            if (teamDetails === 'players') {
                const playerDetails = team[teamDetails];
                for (let playerNames in playerDetails) {
                    const playerStats = playerDetails[playerNames];
                    for (let stat in playerStats) {
                        if (stat === 'steals') {
                            steals.push(playerStats[stat]);
                            names.push(playerNames);
                        }
                    }
                }
            }
        }
    }
    const max = Math.max(...steals);
    const index = steals.indexOf(max);
    const doesLongNameStealATon = names[index];
    return doesLongNameStealATon === playerWithLongestName() ? true : false;
}
*/
