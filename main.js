import './style.css'

document.getElementById('menu-burguer')
  .addEventListener('click', toggleNavbarState);

function toggleNavbarState(e)
{
  const NAVBAR_TOP = document.getElementById('navbar-top');
  NAVBAR_TOP.classList.toggle('hidden')
}