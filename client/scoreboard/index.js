const socket = io();

const table = document.querySelector('#table');

socket.on('update', (data) => {
  const { players } = data;

  table.innerHTML = '';

  const thead = document.createElement('thead');
  const tr = document.createElement('tr');

  Object.keys(players[0]).forEach((key) => {
    const th = document.createElement('th');
    th.innerHTML = key;
    th.scope = 'col';
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  players.forEach((player) => {
    const trPlayer = document.createElement('tr');
    Object.values(player).forEach((value) => {
      const td = document.createElement('td');
      td.innerHTML = value;
      trPlayer.appendChild(td);
    });
    tbody.appendChild(trPlayer);
  });

  table.appendChild(tbody);
});
