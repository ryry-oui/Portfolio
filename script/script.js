// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const overlay = document.getElementById('overlay');
const closeNavBtn = document.getElementById('closeNav');

function openNav() {
  siteNav.classList.add('open');
  siteNav.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  overlay.hidden = false;
}
function closeNav() {
  siteNav.classList.remove('open');
  siteNav.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  overlay.hidden = true;
}

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  expanded ? closeNav() : openNav();
});
closeNavBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

// Escape pour fermer
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Année dynamique
document.getElementById('year').textContent = new Date().getFullYear();
