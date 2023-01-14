var contador = 0;

function ocultar(){
    if(contador==0){
        document.getElementById("estudios").classList.add("oculto");
        contador++;
    }else{
        document.getElementById("estudios").classList.remove("oculto");
        contador = 0;
    }
}
document.getElementById("a-estudios").addEventListener('click',ocultar,true);