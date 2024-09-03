import { Archivo, Carpeta, SistemaDeCarpetas } from "./clases.js";

const archivo1 = new Archivo("archivo1.txt");
const archivo2 = new Archivo("archivo2.txt");
const archivo3 = new Archivo("archivo3.txt");
const archivo5 = new Archivo("archivo5.txt");

const archivo6 = new Archivo("archivo6.txt");
const archivo7 = new Archivo("archivo7.txt");
const archivo8 = new Archivo("archivo8.txt");
const archivo9 = new Archivo("archivo9.txt");
const carpeta1 = new Carpeta("carpeta1");
const carpeta2 = new Carpeta("carpeta2");
const carpetaRaiz = new Carpeta("raiz");

carpeta1.agregarContenido(archivo1);
carpeta2.agregarContenido(archivo2);
carpeta2.agregarContenido(archivo3);
carpeta2.agregarContenido(archivo5);

carpeta1.agregarContenido(archivo6);
carpeta1.agregarContenido(archivo7);
carpeta1.agregarContenido(archivo8);
carpeta2.agregarContenido(archivo9);
carpetaRaiz.agregarContenido(carpeta1);
carpetaRaiz.agregarContenido(carpeta2);

const sistema = new SistemaDeCarpetas(carpetaRaiz);

const { carpetaRaiz: rootFolder } = sistema;
const totalArchivos = sistema.contarArchivos(rootFolder);

document.getElementById("file-count").textContent = totalArchivos;
