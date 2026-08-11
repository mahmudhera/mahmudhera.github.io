const menuButton = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const linkById = new Map(navLinks.map((link) => [link.getAttribute('href').slice(1), link]));

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 120;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section;
    }
  });

  navLinks.forEach((link) => link.classList.remove('active'));
  linkById.get(currentSection.id)?.classList.add('active');
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);
setActiveLink();
