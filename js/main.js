/* VARIABLES */

const Mensaje = document.querySelector('#ImagLogo');
const cuadoMsj = document.querySelector('div.inner');
const AbrirMenu = document.querySelector('#Open');
const CerrarMenu = document.querySelector('#Close');
const CuadroMenu = document.querySelector('div.MenuDesplegable');
const modal = document.querySelector('div.modal');
const overfloow = document.querySelector('body');

/* EVENTOS */

Mensaje.addEventListener('mouseover', verMsg);
Mensaje.addEventListener('mouseleave', ocultarMsg);
AbrirMenu.addEventListener('click', MostrarMenu);
CerrarMenu.addEventListener('click', CerrarMenu2);
modal.addEventListener('click', CerrarModal);
/* FUNCIONES */

function verMsg() {
    cuadoMsj.style.display = 'block';
}

function ocultarMsg() {
    cuadoMsj.style.display = 'none';
}

function MostrarMenu() {
    AbrirMenu.style.display = 'none';
    CerrarMenu.style.display = 'block';
    CuadroMenu.style.display = 'block';

}

function CerrarMenu2() {
    AbrirMenu.style.display = 'block';
    CerrarMenu.style.display = 'none';
    CuadroMenu.style.display = 'none';

}

function CerrarModal(e) {
    if (e.target.classList.contains('fa-window-close')) {
        console.log(e.target.parentElement.parentElement.parentElement.remove());
        overfloow.classList.remove("overf");
    }
}