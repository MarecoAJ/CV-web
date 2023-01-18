var contadorEstudios = 0;
var contadorExperiencia = 0;
var contadorHerramientas = 0;
var contadorConocimientos = 0;

function ocultar(contador, idElemento){
    if(contador==0){
        
        document.getElementById(idElemento).classList.add("oculto");
        contador++;
    }else{
        document.getElementById(idElemento).classList.remove("oculto");
        contador = 0;
    }
}
document.getElementById("a-estudios").addEventListener('click',ocultar(contadorEstudios, 'estudios'),true);
document.getElementById("a-estudios").addEventListener('click',ocultar(contadorHerramientas, 'herramientas'),true);
document.getElementById("a-estudios").addEventListener('click',ocultar(contadorConocimientos, 'conocimientos'),true);
document.getElementById("a-estudios").addEventListener('click',ocultar(contadorExperiencia, 'experiencia'),true);