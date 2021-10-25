const form = document.querySelector('#edit-config-form');

// window.onload = () => {
const search = new URLSearchParams(window.location.search);
const edit = search.get('mode') === 'edit';
form.querySelector('#submit').hidden = !edit;
if (edit) {
  form.querySelectorAll('input').forEach((input) => {
    input.disabled = false;
    input.classList.remove('form-control-plaintext');
  });
} else {
  form.querySelectorAll('input').forEach((input) => {
    input.disabled = true;
    input.classList.add('form-control-plaintext');
  });
}
// };
