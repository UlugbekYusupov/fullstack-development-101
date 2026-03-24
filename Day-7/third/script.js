const app = document.getElementById('app');

// 1. Structure
const box = document.createElement('div');
box.className = 'calc-box';

const screen = document.createElement('input');
screen.id = 'screen';
screen.readOnly = true;

const grid = document.createElement('div');
grid.className = 'grid';

box.appendChild(screen);
box.appendChild(grid);
app.appendChild(box);

// 2. Buttons Configuration
const btns = [
    { t: 'C', c: 'clear span-2', f: () => screen.value = '' },
    { t: 'DEL', c: 'clear', f: () => screen.value = screen.value.slice(0, -1) },
    { t: '/', c: 'op', f: () => screen.value += '/' },
    
    { t: '7', f: () => screen.value += '7' },
    { t: '8', f: () => screen.value += '8' },
    { t: '9', f: () => screen.value += '9' },
    { t: '*', c: 'op', f: () => screen.value += '*' },
    
    { t: '4', f: () => screen.value += '4' },
    { t: '5', f: () => screen.value += '5' },
    { t: '6', f: () => screen.value += '6' },
    { t: '-', c: 'op', f: () => screen.value += '-' },
    
    { t: '1', f: () => screen.value += '1' },
    { t: '2', f: () => screen.value += '2' },
    { t: '3', f: () => screen.value += '3' },
    { t: '+', c: 'op', f: () => screen.value += '+' },
    
    { t: '0', c: 'span-2', f: () => screen.value += '0' },
    { t: '.', f: () => screen.value += '.' },
    { t: '=', c: 'eq', f: calculate }
];

// 3. Create Buttons
btns.forEach(b => {
    const btn = document.createElement('button');
    btn.innerText = b.t;
    if (b.c) btn.className = b.c;
    btn.onclick = b.f;
    grid.appendChild(btn);
});

// 4. Logic
function calculate() {
    try {
        const res = eval(screen.value);
        screen.value = (res === Infinity || isNaN(res)) ? 'Error' : res;
    } catch {
        screen.value = 'Error';
    }
}
