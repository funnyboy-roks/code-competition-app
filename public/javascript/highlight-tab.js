window.onload = () => {
  const items = document.querySelectorAll('ul.navbar-nav li.nav-item a');
  items.forEach((item) => {
    const href = item.getAttribute('href').split('/')[0];
    if (href === window.location.pathname) {
      item.classList.add('active');
    }
  });
};
