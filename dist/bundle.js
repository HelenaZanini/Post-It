/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nota_js__ = __webpack_require__(1);

// import postIt from './components/postIt.js';

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
    
    wall.appendChild(new __WEBPACK_IMPORTED_MODULE_0__nota_js__["a" /* default */] (novoTitulo, novoTexto));

    console.log(post);
} 

window.adicionarNota = adicionarNota;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Nota {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Nota;


/***/ })
/******/ ]);