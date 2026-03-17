document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));

    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navBtns.forEach(btn => {
        btn.onclick = () => {
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.add('hidden'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.remove('hidden');
        };
    });

    let tasks = [
        { id: 1, title: 'Task 1', status: 'pending' },
        { id: 2, title: 'Task 2', status: 'in progress' }
    ];

    function renderTasks() {
        const container = document.getElementById('task-container');
        container.innerHTML = '';
        tasks.forEach(t => {
            const div = document.createElement('div');
            div.className = 'task-item';
            div.innerHTML = `<div><strong>${t.title}</strong> - ${t.status}</div><button onclick="deleteTask(${t.id})">Del</button>`;
            container.appendChild(div);
        });
    }

    window.deleteTask = (id) => {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    };

    document.getElementById('open-modal-btn').onclick = () => document.getElementById('todo-modal').classList.remove('hidden');
    document.getElementById('close-todo-modal').onclick = () => document.getElementById('todo-modal').classList.add('hidden');
    document.getElementById('save-task-btn').onclick = () => {
        const titleInput = document.getElementById('task-title');
        const statusSelect = document.getElementById('task-status');
        if (titleInput.value) {
            tasks.push({ id: Date.now(), title: titleInput.value, status: statusSelect.value });
            renderTasks();
            titleInput.value = '';
            document.getElementById('todo-modal').classList.add('hidden');
        }
    };
    renderTasks();

    document.getElementById('password-input').oninput = (e) => {
        const val = e.target.value;
        let score = 0;
        if (val.length > 5) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71'];
        const texts = ['Very Weak', 'Weak', 'Medium', 'Strong'];
        const idx = Math.max(0, Math.min(score - 1, 3));
        const bar = document.getElementById('strength-bar');
        
        if (val.length === 0) {
            bar.style.width = '0';
            document.getElementById('strength-text').innerText = '';
        } else {
            bar.style.width = (idx + 1) * 25 + '%';
            bar.style.background = colors[idx];
            document.getElementById('strength-text').innerText = texts[idx];
            document.getElementById('strength-text').style.color = colors[idx];
        }
    };

    let expr = '0';
    document.querySelectorAll('.calc-buttons button').forEach(btn => {
        btn.onclick = () => {
            const text = btn.innerText;
            const op = btn.getAttribute('data-op');

            if (text === 'C') {
                expr = '0';
            } else if (op === 'delete') {
                expr = expr.slice(0, -1) || '0';
            } else if (text === '=') {
                try {
                    let clean = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/%/g, '/100');
                    expr = eval(clean).toString();
                } catch {
                    expr = 'Error';
                }
            } else {
                let char = text;
                if (op === '*') char = '*';
                else if (op === '/') char = '/';
                else if (op === '-') char = '-';
                else if (op === '+') char = '+';
                else if (op === '%') char = '%';

                if (expr === '0' && !isNaN(char) && char !== '.') expr = char;
                else expr += char;
            }
            document.getElementById('calc-display').innerText = expr;
        };
    });

    const lights = ['red', 'yellow', 'green'];
    let lightIdx = 2;
    document.getElementById('cycle-light-btn').onclick = () => {
        document.querySelector(`.light.${lights[lightIdx]}`).classList.remove('active');
        lightIdx = (lightIdx - 1 + 3) % 3;
        document.querySelector(`.light.${lights[lightIdx]}`).classList.add('active');
    };

    document.getElementById('btn-show-signup').onclick = () => {
        document.getElementById('signup-form').classList.remove('hidden');
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('btn-show-signup').classList.add('active');
        document.getElementById('btn-show-login').classList.remove('active');
    };
    document.getElementById('btn-show-login').onclick = () => {
        document.getElementById('signup-form').classList.add('hidden');
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('btn-show-login').classList.add('active');
        document.getElementById('btn-show-signup').classList.remove('active');
    };

    let teams = [
        { name: 'Team A', w: 5, l: 2, s: 10, c: 3 },
        { name: 'Team B', w: 3, l: 4, s: 8, c: 10 }
    ];

    function renderLeader() {
        const body = document.querySelector('#leaderboard-table tbody');
        if (!body) return;
        body.innerHTML = '';
        teams.forEach((t, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i+1}</td><td>${t.name}</td><td>${t.w}</td><td>${t.l}</td><td>${t.w*3}</td><td>${t.s-t.c}</td>`;
            body.appendChild(tr);
        });
    }

    document.getElementById('open-team-modal').onclick = () => document.getElementById('team-modal').classList.remove('hidden');
    document.getElementById('close-team-modal').onclick = () => document.getElementById('team-modal').classList.add('hidden');
    
    document.getElementById('save-team-btn').onclick = () => {
        const nI = document.getElementById('team-name');
        const wI = document.getElementById('team-wins');
        const lI = document.getElementById('team-losses');
        const sI = document.getElementById('team-scored');
        const cI = document.getElementById('team-conceded');

        if (nI.value) {
            teams.push({ 
                name: nI.value, 
                w: parseInt(wI.value) || 0, 
                l: parseInt(lI.value) || 0, 
                s: parseInt(sI.value) || 0, 
                c: parseInt(cI.value) || 0 
            });
            renderLeader();
            document.getElementById('team-modal').classList.add('hidden');
            nI.value = ''; wI.value = ''; lI.value = ''; sI.value = ''; cI.value = '';
        }
    };

    document.getElementById('sort-ranking').onclick = () => {
        teams.sort((a,b) => (b.w*3) - (a.w*3));
        renderLeader();
    };

    document.getElementById('highlight-best').onclick = () => {
        const rows = document.querySelectorAll('#leaderboard-table tbody tr');
        let max = -1;
        teams.forEach(t => max = Math.max(max, t.w*3));
        rows.forEach((r, i) => {
            if (teams[i].w*3 === max && max > 0) r.classList.add('best-team');
            else r.classList.remove('best-team');
        });
    };

    renderLeader();
});
