export default class Nota {

    constructor(novoTitulo, novoTexto) {
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._emUso = false;
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }

    get titulo() {
        return this._titulo;
    }

    set texto(novoTexto) {
        this._texto = novoTexto;
    }

    get texto() {
        return this._texto;
    }

    set emUso(novoEmUso) {
        this._emUso = novoEmUso;
    }

    get emUso() {
        return this._emUso;
    }
}