import Nota from './nota.js';
import postIt from './components/postIt.js';

let wall = document.getElementsByClassName('notes')[0];

let add = document.getElementsByClassName('note__control')[0];

add.addEventListener('click', adicionarNota);

function adicionarNota () {
    var form = '';
    form = document.getElementsByClassName('note')[0];
    // console.log(form.titulo);
    // console.log(form.texto);
    var novoTitulo = form.titulo.value;
    var novoTexto = form.texto.value;
    let post = new Nota (novoTitulo, novoTexto);

    

    // wall.appendChild();

    console.log(post);
} 

window.adicionarNota = adicionarNota;