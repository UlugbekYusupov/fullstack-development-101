let teams = [];

function addTeam(){
  const name = document.getElementById("name").value;
  const wins = document.getElementById('wins').value;
  const losses = document.getElementById('losses').value;
  const scored = document.getElementById('scored').value;
  const conceded = document.getElementById('conceded').value;

  let points = wins * 3;
  let diff = scored - conceded;

  let team = {
    name,
    wins,
    losses,
    points,
    diff
  }

  teams.push(team);
  render();
}


function render() {
  tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  teams.forEach((team, index) => {
    let row = `
    <tr>
      <td>${index + 1}</td>
      <td>${team.name}</td>
      <td>${team.wins}</td>
      <td>${team.losses}</td>
      <td>${team.points}</td>
      <td>${team.diff}</td>
    </tr>
    `;

    tableBody.innerHTML += row;
  });
}