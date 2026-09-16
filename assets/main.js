(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!header || !button || !nav) return;
  header.classList.add('js-nav');
  button.hidden = false;
  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false); button.focus();
    }
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  const desktop = window.matchMedia('(min-width: 901px)');
  desktop.addEventListener('change', () => setOpen(false));
})();
