window.onload = () => {
  document.querySelectorAll('a.confirm-redirect').forEach((elt) => {
    const href = elt.getAttribute('href');
    elt.addEventListener('click', (e) => {
      e.preventDefault();
      const leave = confirm('Are you sure you want to leave this page?');
      if (leave) {
        switch (href[0]) {
          case '/':
            window.location.href = window.location.origin + href;
            break;
          case '?':
            window.location.search = href;
            break;
          case '#':
            window.location.hash = href;
            break;
          default:
            window.location.href = href;
            break;
        }
      }
    });
  });
};
