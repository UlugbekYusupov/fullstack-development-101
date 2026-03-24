// // // ________________________ Hometasks _________________________

// 1: _________________

// ─── Shared wrapper ──────────────────────────────────────────────────────────
const hometaskContainer1 = document.createElement('div');
hometaskContainer1.classList.add('container', 'w-50', 'mx-auto', 'my-5');

document.body.append(hometaskContainer1);

// ─── Password strength checker ───────────────────────────────────────────────
function checkPassword(password) {
    let hasLength = password.length >= 8;
    let hasUpper = /[A-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&_*]/.test(password);

    let score = 0;
    if (hasLength) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (score === 4) return 'Strong';
    if (score >= 2) return 'Medium';
    return 'Weak';
}

// ─── showSignUp ───────────────────────────────────────────────────────────────
function showSignUp() {

    hometaskContainer1.innerHTML = ''; // clear container

    // Form
    const form = document.createElement('form');
    form.classList.add('bg-light', 'p-4', 'rounded-4', 'shadow');

    // Title
    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Sign Up';
    formTitle.classList.add('text-center', 'fw-bold', 'mb-4');

    // Username
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.classList.add('form-control', 'my-3', 'py-2');

    // Email
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    emailInput.classList.add('form-control', 'my-3', 'py-2');

    // Password
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.classList.add('form-control', 'my-3', 'py-2');

    // Strength badge
    const strengthBadge = document.createElement('div');
    strengthBadge.classList.add('text-center', 'fw-bold', 'mb-2');

    // Password strength listener
    passwordInput.addEventListener('input', () => {
        const strength = checkPassword(passwordInput.value);
        strengthBadge.textContent = strength;
        strengthBadge.className = 'text-center fw-bold mb-2'; // reset

        if (strength === 'Weak') strengthBadge.classList.add('bg-danger', 'text-white', 'px-3', 'py-1', 'rounded');
        if (strength === 'Medium') strengthBadge.classList.add('bg-warning', 'text-dark', 'px-3', 'py-1', 'rounded');
        if (strength === 'Strong') strengthBadge.classList.add('bg-success', 'text-white', 'px-3', 'py-1', 'rounded');
    });

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Sign Up';
    submitBtn.classList.add('btn', 'btn-primary', 'w-100', 'py-2', 'mt-2');

    // Switch → Login link
    const loginLink = document.createElement('a');
    loginLink.textContent = 'Already have an account? Login';
    loginLink.href = '#';
    loginLink.classList.add('text-primary', 'w-100', 'mt-3', 'text-center', 'd-block', 'text-decoration-none');

    // Switcher click
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLogin(); // ← switch to Login form
    });

    form.append(formTitle, usernameInput, emailInput, passwordInput, strengthBadge, submitBtn, loginLink);
    hometaskContainer1.append(form);
}

// ─── showLogin ────────────────────────────────────────────────────────────────
function showLogin() {

    hometaskContainer1.innerHTML = ''; // clear container

    // Form
    const form = document.createElement('form');
    form.classList.add('bg-light', 'p-4', 'rounded-4', 'shadow');

    // Title
    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Login';
    formTitle.classList.add('text-center', 'fw-bold', 'mb-4');

    // Email
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    emailInput.classList.add('form-control', 'my-3', 'py-2');

    // Password
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.classList.add('form-control', 'my-3', 'py-2');

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Login';
    submitBtn.classList.add('btn', 'btn-primary', 'w-100', 'py-2', 'mt-2');

    // Switch → Sign Up link
    const signupLink = document.createElement('a');
    signupLink.textContent = "Don't have an account? Sign Up";
    signupLink.href = '#';
    signupLink.classList.add('text-primary', 'w-100', 'mt-3', 'text-center', 'd-block', 'text-decoration-none');

    // Switcher click
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSignUp(); // ← switch to Sign Up form
    });

    form.append(formTitle, emailInput, passwordInput, submitBtn, signupLink);
    hometaskContainer1.append(form);
}

// ─── Initial render: start with Sign Up ──────────────────────────────────────
showSignUp();


// 2:

const hometaskContainer2 = document.createElement('div');

const task2Title = document.createElement('h1');
const trophyIcon = document.createElement('i');
const sortBTn = document.createElement('button');
const bestTeamBtn = document.createElement('button');
const addteamBTn = document.createElement('button');


trophyIcon.classList.add('fa-solid', 'fa-trophy');
task2Title.appendChild(trophyIcon);
task2Title.append(' Sports Tournament Leaderboard');
trophyIcon.style.color = 'gold';

// buttuns

sortBTn.classList.add('btn', 'btn-primary', 'w-75', 'mx-auto', 'mt-4');
sortBTn.textContent = 'Sort by Ranking';
bestTeamBtn.classList.add('btn', 'btn-primary', 'w-75', 'mx-auto', 'my-2');
bestTeamBtn.textContent = 'Highlight best Team';
addteamBTn.classList.add('btn', 'btn-primary', 'w-75', 'mx-auto', 'my-3');
addteamBTn.textContent = 'Add new team';
addteamBTn.setAttribute('data-bs-toggle', 'modal');
addteamBTn.setAttribute('data-bs-target', '#teamModal');


// table

const teamData = [
    [1, 'Team A', 5, 2, 15, 7],
    [2, 'Team B', 3, 4, 9, -2],
    [3, 'Team C', 7, 1, 21, 13]
];

const table = document.createElement('table');
table.classList.add('table', 'table-striped', 'table-bordered', 'text-center', 'w-75', 'mx-auto');
const headers = ['Rank', 'Team', 'Wins', 'Losses', 'Points', 'Goal Diff'];

const thead = document.createElement('thead');
thead.classList.add('table-primary');

const headRow = document.createElement('tr');

headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headRow.appendChild(th);
});

thead.appendChild(headRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

teamData.forEach(row => {
    const tr = document.createElement('tr');

    row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});

table.appendChild(tbody);

// Modal

const modal = document.createElement('div');
modal.classList.add('modal', 'fade');
modal.id = 'teamModal';

modal.innerHTML = `
<div class="modal-dialog">
    <div class="modal-content p-3">

        <h4 class="text-center mb-3">
        <i class="fa-solid fa-trophy text-warning"></i>
        Add New Team
        </h4>

        <input id="inputTeamName"   class="form-control mb-2" placeholder="Team Name">
        <input id="inputWins"       class="form-control mb-2" placeholder="Wins"         type="number" min="0">
        <input id="inputLosses"     class="form-control mb-2" placeholder="Losses"       type="number" min="0">
        <input id="inputGoalsFor"   class="form-control mb-2" placeholder="Goals Scored" type="number" min="0">
        <input id="inputGoalsAgainst" class="form-control mb-3" placeholder="Goals Conceded" type="number" min="0">

        <button id="addTeamToLeaderboard" class="btn btn-primary w-100">Add Team</button>

    </div>
</div>
`;

hometaskContainer2.classList.add('container', 'my-5', 'text-center', 'w-75', 'mx-auto');

hometaskContainer2.append(task2Title, sortBTn, bestTeamBtn, table, addteamBTn, modal);
document.body.append(hometaskContainer2);

// ─── Re-render tbody from teamData ───────────────────────────────────────────
function renderTableBody() {
    tbody.innerHTML = '';
    teamData.forEach((row, index) => {
        row[0] = index + 1; // keep rank accurate
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// ─── Add Team button handler ──────────────────────────────────────────────────
document.getElementById('addTeamToLeaderboard').addEventListener('click', () => {
    const name = document.getElementById('inputTeamName').value.trim();
    const wins = parseInt(document.getElementById('inputWins').value) || 0;
    const losses = parseInt(document.getElementById('inputLosses').value) || 0;
    const gFor = parseInt(document.getElementById('inputGoalsFor').value) || 0;
    const gAg = parseInt(document.getElementById('inputGoalsAgainst').value) || 0;

    if (!name) {
        alert('Please enter a team name.');
        return;
    }

    const points = wins * 3;         
    const goalDiff = gFor - gAg;
    const rank = teamData.length + 1;

    teamData.push([rank, name, wins, losses, points, goalDiff]);
    renderTableBody();

    ['inputTeamName', 'inputWins', 'inputLosses', 'inputGoalsFor', 'inputGoalsAgainst']
        .forEach(id => document.getElementById(id).value = '');

    const bsModal = bootstrap.Modal.getInstance(document.getElementById('teamModal'));
    if (bsModal) bsModal.hide();
});

// ─── Sort by Points (descending) ─────────────────────────────────────────────
// teamData row layout: [rank, name, wins, losses, points, goalDiff]
//                        [0]   [1]   [2]    [3]     [4]      [5]
sortBTn.addEventListener('click', () => {
    teamData.sort((a, b) => b[4] - a[4]); 
    renderTableBody();
});

// ─── Best Team modal ──────────────────────────────────────────────────────────
bestTeamBtn.addEventListener('click', () => {
    if (teamData.length === 0) {
        alert('No teams yet!');
        return;
    }

    const best = teamData.reduce((prev, curr) => (curr[4] > prev[4] ? curr : prev));
    const [, name, wins, losses, points, goalDiff] = best;

    let bestModal = document.getElementById('bestTeamModal');
    if (!bestModal) {
        bestModal = document.createElement('div');
        bestModal.classList.add('modal', 'fade');
        bestModal.id = 'bestTeamModal';
        document.body.appendChild(bestModal);
    }

    bestModal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4 text-center">

            <button type="button" class="btn-close ms-auto mb-2" data-bs-dismiss="modal"></button>

            <div class="mb-3">
                <i class="fa-solid fa-trophy fa-3x text-warning"></i>
            </div>
            <h4 class="fw-bold mb-1">🏆 Best Team</h4>
            <h2 class="text-primary fw-bold mb-4">${name}</h2>

            <div class="row g-3 text-center mb-2">
                <div class="col-4">
                    <div class="border rounded-3 p-2 bg-light">
                        <div class="fs-4 fw-bold text-success">${wins}</div>
                        <small class="text-muted">Wins</small>
                    </div>
                </div>
                <div class="col-4">
                    <div class="border rounded-3 p-2 bg-light">
                        <div class="fs-4 fw-bold text-danger">${losses}</div>
                        <small class="text-muted">Losses</small>
                    </div>
                </div>
                <div class="col-4">
                    <div class="border rounded-3 p-2 bg-light">
                        <div class="fs-4 fw-bold text-primary">${points}</div>
                        <small class="text-muted">Points</small>
                    </div>
                </div>
            </div>
            <p class="mt-2 text-muted">Goal Difference: <strong>${goalDiff >= 0 ? '+' : ''}${goalDiff}</strong></p>
        </div>
    </div>
    `;

    const bsBestModal = new bootstrap.Modal(bestModal);
    bsBestModal.show();
});