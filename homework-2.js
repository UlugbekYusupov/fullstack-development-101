let teams = [
    { name: "Team A", wins: 5, losses: 2, goalsScored: 12, goalsConceded: 5 },
    { name: "Team B", wins: 3, losses: 4, goalsScored: 8,  goalsConceded: 10 },
    { name: "Team C", wins: 7, losses: 1, goalsScored: 20, goalsConceded: 7 },
];

function getPoints(team) {
    return team.wins * 3;
}

function getGoalDiff(team) {
    return team.goalsScored - team.goalsConceded;
}

function createInput(placeholder) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;

    input.style.width = "100%";
    input.style.padding = "10px 14px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "8px";
    input.style.fontSize = "14px";
    input.style.outline = "none";

    input.addEventListener("focus", () => input.style.borderColor = "#2979ff");
    input.addEventListener("blur",  () => input.style.borderColor = "#ccc");

    return input;
}

function createCard() {
    const card = document.createElement("div");
    card.style.background = "white";
    card.style.padding = "30px";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    return card;
}

function createButton(text, bgColor) {
    const btn = document.createElement("button");
    btn.textContent = text;

    btn.style.width = "100%";
    btn.style.padding = "12px";
    btn.style.background = bgColor || "#2979ff";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.fontSize = "15px";
    btn.style.cursor = "pointer";

    btn.addEventListener("mouseover", () => btn.style.opacity = "0.85");
    btn.addEventListener("mouseout",  () => btn.style.opacity = "1");

    return btn;
}

const leftCard = createCard();
leftCard.style.width = "380px";
const leftTitle = document.createElement("h2");
leftTitle.textContent = "🏆 Add New Team";
leftTitle.style.textAlign = "center";
leftTitle.style.marginBottom = "20px";

const teamNameInput     = createInput("Team Name");
const winsInput         = createInput("Wins");
const lossesInput       = createInput("Losses");
const goalsScoredInput  = createInput("Goals Scored");
const goalsConcededInput= createInput("Goals Conceded");

function addGap(el) {
    el.style.marginBottom = "12px";
    return el;
}
const formMessage = document.createElement("p");
formMessage.style.textAlign = "center";
formMessage.style.fontSize = "13px";
formMessage.style.marginTop = "8px";
const addBtn = createButton("Add Team");

addBtn.addEventListener("click", function () {
    const name      = teamNameInput.value.trim();
    const wins      = parseInt(winsInput.value);
    const losses    = parseInt(lossesInput.value);
    const scored    = parseInt(goalsScoredInput.value);
    const conceded  = parseInt(goalsConcededInput.value);

    if (!name || isNaN(wins) || isNaN(losses) || isNaN(scored) || isNaN(conceded)) {
        formMessage.textContent = "Fill in all fields correctly!";
        formMessage.style.color = "red";
        return;
    }
    teams.push({
        name: name,
        wins: wins,
        losses: losses,
        goalsScored: scored,
        goalsConceded: conceded
    });

    formMessage.textContent = "✅ " + name + " succesfully added!";
    formMessage.style.color = "green";

    teamNameInput.value      = "";
    winsInput.value          = "";
    lossesInput.value        = "";
    goalsScoredInput.value   = "";
    goalsConcededInput.value = "";
    renderTable();
});

leftCard.appendChild(leftTitle);
leftCard.appendChild(addGap(teamNameInput));
leftCard.appendChild(addGap(winsInput));
leftCard.appendChild(addGap(lossesInput));
leftCard.appendChild(addGap(goalsScoredInput));
leftCard.appendChild(addGap(goalsConcededInput));
leftCard.appendChild(addBtn);
leftCard.appendChild(formMessage);

const rightCard = createCard();
rightCard.style.width = "500px";

const rightTitle = document.createElement("h2");
rightTitle.textContent = "🏆 Sports Tournament Leaderboard";
rightTitle.style.textAlign = "center";
rightTitle.style.marginBottom = "16px";

const sortBtn = createButton("Sort by Ranking");
sortBtn.style.marginBottom = "8px";

sortBtn.addEventListener("click", function () {
    teams.sort((a, b) => getPoints(b) - getPoints(a));
    renderTable();
});

let highlightOn = false;
const highlightBtn = createButton("Highlight Best Team");
highlightBtn.style.marginBottom = "16px";

highlightBtn.addEventListener("click", function () {
    highlightOn = !highlightOn;
    renderTable();
});

const tableContainer = document.createElement("div");
tableContainer.style.overflowX = "auto";

function renderTable() {
    const maxPoints = Math.max(...teams.map(t => getPoints(t)));

    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Rank", "Team", "Wins", "Losses", "Points", "Goal Diff"];

    headers.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.background = "#2979ff";
        th.style.color = "white";
        th.style.padding = "12px 10px";
        th.style.textAlign = "center";
        th.style.fontSize = "14px";
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    teams.forEach(function (team, index) {
        const row = document.createElement("tr");

        if (highlightOn && getPoints(team) === maxPoints) {
            row.style.background = "#fff9c4"; 
            row.style.fontWeight = "bold";
        } else {
            row.style.background = index % 2 === 0 ? "white" : "#f5f5f5";
        }

        const cells = [
            index + 1,
            team.name,
            team.wins,
            team.losses,
            getPoints(team),
            getGoalDiff(team)
        ];

        cells.forEach(function (value) {
            const td = document.createElement("td");
            td.textContent = value;
            td.style.padding = "12px 10px";
            td.style.textAlign = "center";
            td.style.borderBottom = "1px solid #e0e0e0";
            td.style.fontSize = "14px";
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

rightCard.appendChild(rightTitle);
rightCard.appendChild(sortBtn);
rightCard.appendChild(highlightBtn);
rightCard.appendChild(tableContainer);

const root = document.getElementById("root");
root.appendChild(leftCard);
root.appendChild(rightCard);

renderTable();