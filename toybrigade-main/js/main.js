//submenu functionality for navbar
document.querySelectorAll('.dropdown-submenu').forEach(function(el) {
  el.addEventListener('mouseleave', function() {
    const submenu = el.querySelector('.dropdown-menu');
    if (submenu) {
      setTimeout(() => submenu.style.display = 'none', 150); // small delay before hiding
    }
  });

  el.addEventListener('mouseenter', function() {
    const submenu = el.querySelector('.dropdown-menu');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });
});
