document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navActions = document.querySelector('.navbar__actions');

    if (!toggleButton || !navActions) return;

    toggleButton.addEventListener('click', () => {
        const isOpen = navActions.classList.toggle('is-open');
        toggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.navbar__menu a').forEach((link) => {
        link.addEventListener('click', () => {
            navActions.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });
});
