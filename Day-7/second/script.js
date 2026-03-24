const app = document.getElementById('app');


const card = document.createElement('div');
card.className = 'card';

const h2 = document.createElement('h2');
h2.innerText = 'Password Checker';

const input = document.createElement('input');
input.type = 'password';
input.placeholder = 'Enter password...';

const strengthLabel = document.createElement('div');
strengthLabel.innerHTML = 'Strength: <b id="status">None</b>';

const meter = document.createElement('div');
meter.className = 'strength-meter';

const fill = document.createElement('div');
fill.className = 'fill';
meter.appendChild(fill);

const rulesList = document.createElement('ul');
rulesList.className = 'rules';

const rules = [
    { id: 'len', text: 'At least 6 characters' },
    { id: 'num', text: 'Contains a number' },
    { id: 'spec', text: 'Contains a special character' }
];

const ruleElements = {};
rules.forEach(r => {
    const li = document.createElement('li');
    li.innerText = r.text;
    rulesList.appendChild(li);
    ruleElements[r.id] = li;
});

card.appendChild(h2);
card.appendChild(input);
card.appendChild(strengthLabel);
card.appendChild(meter);
card.appendChild(rulesList);
app.appendChild(card);


input.oninput = () => {
    const val = input.value;
    const status = document.getElementById('status');
    
    const hasLen = val.length >= 6;
    const hasNum = /[0-9]/.test(val);
    const hasSpec = /[!@#$%^&*]/.test(val);

    updateUI(ruleElements.len, hasLen);
    updateUI(ruleElements.num, hasNum);
    updateUI(ruleElements.spec, hasSpec);

    let level = '';
    let text = 'None';

    if (val.length > 0) {
        if (val.length >= 10 && hasNum && hasSpec) {
            level = 'strong';
            text = 'Solid';
        } else if (hasLen && (hasNum || hasSpec)) {
            level = 'medium';
            text = 'Medium';
        } else {
            level = 'weak';
            text = 'Weak';
        }
    }

    fill.className = 'fill ' + level;
    status.innerText = text;
};

function updateUI(el, isValid) {
    if (isValid) el.classList.add('valid');
    else el.classList.remove('valid');
}
