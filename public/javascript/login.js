const elt = document.querySelector('form');
elt.setAttribute('action', elt.getAttribute('action') + window.location.search);
