(() => {
  const refs = {
    openMenuBtn: document.querySelector('[js-menu-open]'),
    closeMenuBtn: document.querySelector('[js-menu-close]'),
    menu: document.querySelector('[js-menu-container]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();