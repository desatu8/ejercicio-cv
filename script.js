const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.cabecera-menu');

toggle.addEventListener('click', () => {
	menu.classList.toggle('active');
	toggle.classList.toggle('active');
});