var contadorEstudios = 0;
var contadorExperiencia = 0;
var contadorHerramientas = 0;
var contadorConocimientos = 0;

var bttEstudios = document.getElementById("btt-estudios");
var bttHerramientas = document.getElementById("btt-herramientas");
var bttConocimientos = document.getElementById("btt-conocimientos");
var bttExperiencia = document.getElementById("btt-experiencia");
var bttContactos = document.getElementById("btt-contactos");

bttEstudios.addEventListener('click', function () {
    if (contadorEstudios == 0) {
        document.getElementById("estudios").classList.remove("oculto");
        contadorEstudios++;
        if (contadorHerramientas != 0) {
            document.getElementById("herramientas").classList.add("oculto");
            contadorHerramientas = 0;
        }
        if (contadorConocimientos != 0) {
            document.getElementById("conocimientos").classList.add("oculto");
            contadorConocimientos = 0;
        }
        if (contadorExperiencia != 0) {
            document.getElementById("experiencia").classList.add("oculto");
            contadorExperiencia = 0;
        }
    } else {
        document.getElementById("estudios").classList.add("oculto");
        contadorEstudios = 0;
    }
});
bttHerramientas.addEventListener('click', function () {
    if (contadorHerramientas == 0) {
        document.getElementById("herramientas").classList.remove("oculto");
        contadorHerramientas++;
        if (contadorEstudios != 0) {
            document.getElementById("estudios").classList.add("oculto");
            contadorEstudios = 0;
        }
        if (contadorConocimientos != 0) {
            document.getElementById("conocimientos").classList.add("oculto");
            contadorConocimientos = 0;
        }
        if (contadorExperiencia != 0) {
            document.getElementById("experiencia").classList.add("oculto");
            contadorExperiencia = 0;
        }
    } else {
        document.getElementById("herramientas").classList.add("oculto");
        contadorHerramientas = 0;
    }
});
bttConocimientos.addEventListener('click', function () {
    if (contadorConocimientos == 0) {

        document.getElementById("conocimientos").classList.remove("oculto");
        contadorConocimientos++;
        if (contadorHerramientas != 0) {
            document.getElementById("herramientas").classList.add("oculto");
            contadorHerramientas = 0;
        }
        if (contadorEstudios != 0) {
            document.getElementById("estudios").classList.add("oculto");
            contadorEstudios = 0;
        }
        if (contadorExperiencia != 0) {
            document.getElementById("experiencia").classList.add("oculto");
            contadorExperiencia = 0;
        }
    } else {
        document.getElementById("conocimientos").classList.add("oculto");
        contadorConocimientos = 0;
    }
});
bttExperiencia.addEventListener('click', function () {
    if (contadorExperiencia == 0) {
        document.getElementById("experiencia").classList.remove("oculto");
        contadorExperiencia++;
        if (contadorHerramientas != 0) {
            document.getElementById("herramientas").classList.add("oculto");
            contadorHerramientas = 0;
        }
        if (contadorConocimientos != 0) {
            document.getElementById("conocimientos").classList.add("oculto");
            contadorConocimientos = 0;
        }
        if (contadorEstudios != 0) {
            document.getElementById("estudios").classList.add("oculto");
            contadorEstudios = 0;
        }
    } else {
        document.getElementById("experiencia").classList.add("oculto");
        contadorExperiencia = 0;
    }
});

bttContactos.addEventListener('click', function () {
    location.href = "/page/contacto.html";
});


