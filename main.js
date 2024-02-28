function muestra_oculto(id){
    let informacion = document.getElementById(id);
    if(informacion.style.display == "none"){
        informacion.style.display = "flex"
    }
    else{
        informacion.style.display = "none"
    }
}