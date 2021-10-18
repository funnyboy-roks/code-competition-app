const form = document.querySelector('form#login');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const bodyInfo = {};

  form.querySelectorAll('input').forEach((elt) => {
    bodyInfo[elt.name] = elt.value;
    if (elt.type === 'password') elt.value = '';
  });

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(bodyInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(console.log);
});
