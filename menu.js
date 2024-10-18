const btnMenu = document.getElementById('btn-menu')
const menu = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', () => {
    menu.classList.add('ativo')
})

menu.addEventListener('click', () => {
    menu.classList.remove('ativo')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('ativo')
})