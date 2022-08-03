const botaoMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', function () {
    menuLateral.classList.toggle('cabecalho-esconde');
});

menuLateral.addEventListener('click', function (e) {
    e.classList.toggle('opcao-ativa');
});