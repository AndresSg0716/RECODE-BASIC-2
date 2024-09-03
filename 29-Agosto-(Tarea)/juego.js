import { Archivo, Carpeta, SistemaDeCarpetas } from "./clases.js";

const archivo1 = new Archivo("archivo1.txt");
const archivo2 = new Archivo("archivo2.txt");
const archivo3 = new Archivo("archivo3.txt");
const archivo5 = new Archivo("archivo5.txt");

const carpeta1 = new Carpeta("carpeta1");
const carpeta2 = new Carpeta("carpeta2");
const carpetaRaiz = new Carpeta("raiz");

carpeta1.agregarContenido(archivo1);
carpeta2.agregarContenido(archivo2);
carpeta2.agregarContenido(archivo3);
carpeta2.agregarContenido(archivo5);

carpetaRaiz.agregarContenido(carpeta1);
carpetaRaiz.agregarContenido(carpeta2);

const sistema = new SistemaDeCarpetas(carpetaRaiz);

const { carpetaRaiz: rootFolder } = sistema;
const totalArchivos = sistema.contarArchivos(rootFolder);

document.getElementById("file-count").textContent = totalArchivos;
