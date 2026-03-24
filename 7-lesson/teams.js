const teamname = document.getElementById("teamname")
const wins = document.getElementById("wins")
const loses = document.getElementById("losses")
const goals = document.getElementById("goals")
const goals2 = document.getElementById("goals2")

let teams = [
    {
        name: "Team A",
        wins: 5,
        loses: 2,
        points: 15,
        goaldiff: 7
    },
    {
        name: "Team B",
        wins: 3,
        loses: 4,
        points: 9,
        goaldiff: -2
    },
    {
        name: "Team C",
        wins: 7,
        loses: 1,
        points: 21,
        goaldiff: 13
    },
]

function displayTeams() {
    const tbody = document.getElementById("teamBody");
    tbody.innerHTML = ""; // Oldingi ma'lumotni o'chirish

    teams.forEach((team, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${team.name}</td>
                <td>${team.wins}</td>
                <td>${team.loses}</td>
                <td>${team.points}</td>
                <td>${team.goaldiff}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function addTeam() {
    if (!teamname.value || !wins.value || !loses.value || !goals.value || !goals2.value) {
        alert("Fill all inputs!");
        return;
    }

    const newTeam = {
        name: teamname.value,
        wins: Number(wins.value),
        loses: Number(loses.value),
        points: Number(wins.value) * 3,
        goaldiff: Number(goals.value) - Number(goals2.value)
    };

    teams.push(newTeam);
    displayTeams(); // Jadvalni yangilash
    alert("Team succesfully added")
    console.log("Jamoalar ro'yxati:", teams);

    teamname.value = "";
    wins.value = "";
    loses.value = "";
    goals.value = "";
    goals2.value = "";
}

function sortTeams() {
    teams.sort((a, b) => b.points - a.points);
    displayTeams();
}

displayTeams();